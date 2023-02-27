const Team = () => {
    const people = [
        {
          name: 'Leslie',
          role: 'Co-Founder / CEO',
          imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      ]
    return ( 
        <div className="bg-white">
            <div className="mx-auto py-10 px-4 max-w-7xl ">
                    <h1 className='flex items-end justify-start ml-48 pb-10 head'>Tim Kami</h1>
                <div className="flex flex-row">
                    <div className="grid gap-12 mr-24 ml-48">
                    <div className="lg:col-span-1">
                        <ul role="list" className="space-y-12 gap-x-8">
                        {people.map((person) => (
                            <li key={person.name}>
                            <div className="flex items-center space-x-4 lg:space-x-6">
                                <img className="w-16 h-16 rounded-full lg:w-20 lg:h-20" src={person.imageUrl} alt="" />
                                <div className="font-medium text-lg leading-6 space-y-1">
                                <h3 className="head">{person.name}</h3>
                                <p className="text-indigo-600 capt">{person.role}</p>
                                </div>
                            </div>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-1">
                        <ul role="list" className="space-y-12 gap-x-8">
                        {people.map((person) => (
                            <li key={person.name}>
                            <div className="flex items-center space-x-4 lg:space-x-6">
                                <img className="w-16 h-16 rounded-full lg:w-20 lg:h-20" src={person.imageUrl} alt="" />
                                <div className="font-medium text-lg leading-6 space-y-1">
                                <h3 className="head">{person.name}</h3>
                                <p className="text-indigo-600 capt">{person.role}</p>
                                </div>
                            </div>
                            </li>
                        ))}
                        </ul>
                    </div>
                    </div>
                    <div className="grid gap-12 mr-24">
                    <div className="lg:col-span-2">
                        <ul role="list" className="space-y-12 gap-x-8">
                        {people.map((person) => (
                            <li key={person.name}>
                            <div className="flex items-center space-x-4 lg:space-x-6">
                                <img className="w-16 h-16 rounded-full lg:w-20 lg:h-20" src={person.imageUrl} alt="" />
                                <div className="font-medium text-lg leading-6 space-y-1">
                                <h3 className="head">{person.name}</h3>
                                <p className="text-indigo-600 capt">{person.role}</p>
                                </div>
                            </div>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-2">
                        <ul role="list" className="space-y-12 gap-x-8">
                        {people.map((person) => (
                            <li key={person.name}>
                            <div className="flex items-center space-x-4 lg:space-x-6">
                                <img className="w-16 h-16 rounded-full lg:w-20 lg:h-20" src={person.imageUrl} alt="" />
                                <div className="font-medium text-lg leading-6 space-y-1">
                                <h3 className="head">{person.name}</h3>
                                <p className="text-indigo-600 capt">{person.role}</p>
                                </div>
                            </div>
                            </li>
                        ))}
                        </ul>
                    </div>
                    </div>
                    <div className="grid gap-12">
                    <div className="lg:col-span-2">
                        <ul role="list" className="space-y-12 gap-x-8">
                        {people.map((person) => (
                            <li key={person.name}>
                            <div className="flex items-center space-x-4 lg:space-x-6">
                                <img className="w-16 h-16 rounded-full lg:w-20 lg:h-20" src={person.imageUrl} alt="" />
                                <div className="font-medium text-lg leading-6 space-y-1">
                                <h3 className="head">{person.name}</h3>
                                <p className="text-indigo-600 capt">{person.role}</p>
                                </div>
                            </div>
                            </li>
                        ))}
                        </ul>
                    </div>
                    <div className="lg:col-span-2">
                        <ul role="list" className="space-y-12 gap-x-8">
                        {people.map((person) => (
                            <li key={person.name}>
                            <div className="flex items-center space-x-4 lg:space-x-6">
                                <img className="w-16 h-16 rounded-full lg:w-20 lg:h-20" src={person.imageUrl} alt="" />
                                <div className="font-medium text-lg leading-6 space-y-1">
                                <h3 className="head">{person.name}</h3>
                                <p className="text-indigo-600 capt">{person.role}</p>
                                </div>
                            </div>
                            </li>
                        ))}
                        </ul>
                    </div>
                    </div>
                </div>
            </div>
            
            </div>
     );
}
 
export default Team;