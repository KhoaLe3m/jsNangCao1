import instance from "./config";

export const getAll = () => {
    const url = `/ordersid`;
    return instance.get(url);
};
export const getIdOrder = (id) => {
    const url = `/ordersid/${id}`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/ordersid/${id}`;
    return instance.delete(url);
};
export const addOrderId = (ordersid) => {
    const url = `/ordersid`;
    return instance.post(url, ordersid);
};
export const edit = (ordersid) => {
    const url = `/ordersid/${ordersid.id}`;
    return instance.put(url, ordersid);
};