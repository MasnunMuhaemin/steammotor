const OwnerSection = () => {
    return (
        <div className="items-center justify-center md:flex flex-col px-3 absolute top-32 right-3 hidden md:right-32 bg-zinc-800 w-64 lg:min-w-96 md:max-w-96 py-5 rounded-xl border-slate-500 border-y-8">
            <p className="lg:text-4xl text-2xl font-bold">About the Owner:</p>
            <div className="h-48 w-48 mt-5 mb-2">
                <img src="/images/owner.jpg" alt="" className="w-full object-cover h-full rounded-full border-2" />
            </div>
            <p className="text-xl font-bold">" Johnson Sholawatan "</p>
            <p className="text-lg font-semibold italic opacity-75">Owner of Stem</p>
            <div className="text-sm font-medium text-center mt-5">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, recusandae.</p>
            </div>
        </div>
    )
}

export default OwnerSection