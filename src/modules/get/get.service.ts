import { prisma } from "../../lib/prisma";

const getPost = async(authorId?: String) =>{
    const result = await prisma.post.findMany({
        where: {
            authorId: 'slkfdjlfjsdlkf',
        },
    })
    return result;
}

export const getService = {
    getPost
}