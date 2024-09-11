const GroupCreatePage = async ({
    searchParams,
}: {
    searchParams: { [affiliate: string]: string }
}) => {
    const user = await onAuthenticatedUser()

    return <div>GroupCreatePage</div>
}

export default GroupCreatePage
