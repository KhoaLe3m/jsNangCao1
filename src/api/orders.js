import instance from "./config";

export const getAll = () => {
    const url = `/orders`;
    return instance.get(url);
};
export const get = (id) => {
    const url = `/orders/${id}`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/orders/${id}`;
    return instance.delete(url);
};
export const addOrder = (order) => {
    const url = `/orders`;
    return instance.post(url, order);
};
export const edit = (order) => {
    const url = `/orders/${order.id}`;
    return instance.put(url, order);
};