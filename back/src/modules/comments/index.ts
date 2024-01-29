export default class Comments {
  url: string;
  constructor() {
    this.url = "http://localhost:3001";
  }

  async getComments(params) {
    const response = await fetch(`${this.url}/comments?id=${params?.id}`);
    if (!response.ok) return [];

    const result = await response.json();
    return result;
  }

  async createComment(params) {
    await fetch(`${this.url}/comments`, {
      method: "POST",
      body: JSON.stringify(params),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return this.getComments({ id: params.id });
  }
}
