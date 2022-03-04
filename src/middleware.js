const ip  = "192.168.192.31"

export const get_search = async(){
	const ITEM_TYPE = await fetch(ip + "/itemtypes" + ip);
	return ITEM_TYPE.data.results;
}
