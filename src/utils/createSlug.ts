export const createSlugWithId = (title: string, id?: number) => {
    if(id){
        return `${id}-${title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')}`;
    }else{
        return `${title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w\-]+/g, '')}`;
    }
};