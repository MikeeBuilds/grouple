'use server'

export const onAuththenticatedUser = async () => {
    const user = await prisma.user.findFirst({
        where: {
            email: 'user@example.com'
        }
    })