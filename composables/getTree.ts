interface Node {
  id: number;
  parentId: number;
  categoryName: string;
  nsLevel: number;
}

export const useTree = async (pId: string) => {

    const { data, pending, error } = await useAsyncData(`${pId}-children`, () =>
      $fetch<Node[]>(
        `http://192.168.200.38:45455/api/Mopcategory/Get/?parentid=${pId}`
      )
    );
    return { data, pending, error };

};

export const topTwo = async () => {

    const { data, pending, error } = await useAsyncData("top-two", () =>
      $fetch<Node[]>("http://192.168.200.38:45455/api/Mopcategory/Get")
    );
    return { data, pending, error };

};
export const getAll = async () => {

    const { data, pending, error } = await useAsyncData("all-tree", () =>
      $fetch<Node[]>("http://192.168.200.38:45456/api/Mopcategory/GetAll")
    );
    const rename = (t:globalThis.Ref<Node[] | null>) => {
      if(t.value && !pending.value) {
       return t.value.map(n => {
        const {categoryName,id,...rest} = n
        return {
          ...rest,
          value:n.id,
          label:n.categoryName
        }
       })
      }
    }
    const trees = rename(data)
    return { trees, pending, error };

};
