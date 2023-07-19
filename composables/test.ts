interface Node {
    id: number;
    parentId: number;
    categoryName: string;
    nsLevel: number;
  }

export const gitAll = async () => {

    const { data, pending, error } = await useAsyncData("git-all", () =>
      $fetch<Node[]>("https://github.com/r3ndo0/shz/blob/main/assets/response_1689141419240.json")
    );
    return { data, pending, error };

};
