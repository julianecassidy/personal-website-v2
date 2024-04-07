import type { Post, Tag } from "../types";

const STRAPI_BASE_URL = import.meta.env.STRAPI_URL || "http://localhost:1337/api/";
const STRAPI_SORT_PARAM = "sort=publishedAt:desc";
const STAPI_RELATION_PARAM = "populate=*";

/** Blog Post API Class.
 * Static class tying to get blog posts from Strapi API.
 *
 */
class BlogApi {

    /** Make an API get request to Strapi to get all blog posts in the personal-blog
     * content-type. Returns an array of post data:
     * [{id: 1,
     * title: "Title",
     * permalink: "title",
     * content: 'Lorem ipusm.'
     * date: 2023-09-06T22:23:59.146Z},
     * tags: { name, id }}, ... ]
     */
    static async getPosts() : Promise<Array<Post>> {
        // console.debug("getPosts");
        const resp = await fetch(
            `${STRAPI_BASE_URL}personal-blogs?${STRAPI_SORT_PARAM}&${STAPI_RELATION_PARAM}`
        );
        const postData = await resp.json();
        const posts = postData.data.map((post: any) => {
            const data = {
                id: post.id,
                title: post.attributes.Title,
                permalink: post.attributes.Permalink,
                content: post.attributes.Content,
                date: post.attributes.publishedAt,
                tags: post.attributes.categories.data.map((category: any) =>{
                    const tag = {
                        name: category.attributes.Tag,
                        id: category.id,
                    }
                    return tag;
                }),
            };
            return data;
        })

        return posts;
    }

    /** Make an API get request to Strapi to get all tags. Returns an array of
     * tag daga:
     * [{id: 1,
     * name: "test"}, ]
     */
    static async getTags() : Promise<Array<Tag>> {
        // console.debug("getTags");
        const resp = await fetch(`${STRAPI_BASE_URL}categories`);
        const tagData = await resp.json();
        const tags = tagData.data.map((tag: any) => {
            const data = {
                id: tag.id,
                name: tag.attributes.Tag,
            };
            return data;
        })

        return tags;
    }

    /** Make an API get request to Strapi to get all blog posts with the given
     * tag by tag ID. Returns an array of post data:
     * [{id: 1,
     * title: "Title",
     * permalink: "title",
     * content: 'Lorem ipusm.'
     * date: 2023-09-06T22:23:59.146Z, ... ]
     */
    static async getTaggedPosts(tag_id: number) : Promise<Array<Post>> {
        // console.debug("getTaggedPosts");
        const resp = await fetch(
            `${STRAPI_BASE_URL}categories/${tag_id}?${STAPI_RELATION_PARAM}`
        );
        const postsData = await resp.json();

        const posts = postsData.data.attributes.personal_blogs.data.map((post: any) => {
            const data = {
                id: post.id,
                title: post.attributes.Title,
                permalink: post.attributes.Permalink,
                content: post.attributes.Content,
                date: post.attributes.publishedAt,
            };
            return data;
        })

        return posts;
    }

    /** Make an API get request to Strapi to get a single blog post by id.
     * Returns a formatted object of all post data:
     * {id: 1,
     * title: "Title",
     * permalink: "title",
     * content: 'Lorem ipusm.'
     * date: 2023-09-06T22:23:59.146Z,
     * canonical: "https://julianecassidy.com/blog/2",
     * tags: { name, id }}
     */
    static async getPost(id: number) : Promise<Post> {
        // console.debug("getPost");
        const resp = await fetch(
            `${STRAPI_BASE_URL}personal-blogs/${id}?${STAPI_RELATION_PARAM}`);
        const postData = await resp.json();
        const post = {
            id: postData.data.id,
            permalink: postData.data.attributes.Permalink,
            title: postData.data.attributes.Title,
            content: postData.data.attributes.Content,
            date: postData.data.attributes.publishedAt,
            canonical: postData.data.attributes.Canonical,
            tags:
                postData.data.attributes.categories.data.map((category: any) =>{
                    const tag = {
                        name: category.attributes.Tag,
                        id: category.id,
                    }
                    return tag;
                }),
            }

        return post;
    }

    /** Takes a UTC format date '2023-09-07T03:18:34.941Z' and returns it
    * in the format "dd Month yyyy" */
    static formatDate(UTCDate: string) : string {
        const date = new Date(UTCDate).toLocaleDateString(
            'en-US',
            {year: "numeric", month: "long", day: "numeric"});
        return date;
    }

}


export { BlogApi };
