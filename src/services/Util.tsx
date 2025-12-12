import type { Posts } from "./Posts";

function findPostById(list: Posts[], lookup: string | undefined): Posts | number | any {
	for (let i = 0; i < list.length; i++) {
		if (list[i].id == lookup) {
			return list[i];
		}
		return undefined;
	}
}

export default findPostById;