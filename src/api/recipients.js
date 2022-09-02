import instance from "./config";

export const getAll = () => {
    const url = `/recipients`;
    return instance.get(url);
};
export const get = (id) => {
    const url = `/recipients/${id}`;
    return instance.get(url);
};
export const remove = (id) => {
    const url = `/recipients/${id}`;
    return instance.delete(url);
};
export const add = (recipient) => {
    const url = `/recipients`;
    return instance.post(url, recipient);
};
export const edit = (recipient) => {
    const url = `/recipients/${recipient.id}`;
    return instance.put(url, recipient);
};