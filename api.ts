const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_URL + '/wp-json/wp/v2';

export async function getPosts() {
  const res = await fetch(`${API_URL}/posts?_embed&per_page=10`);
  return res.json();
}

export async function getPostBySlug(slug: string) {
  const res = await fetch(`${API_URL}/posts?slug=${slug}&_embed`);
  const posts = await res.json();
  return posts[0];
}
