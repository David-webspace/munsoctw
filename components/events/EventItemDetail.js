export const EventItemDetail = ({ event }) => {
  // Generate a richer description if not present
  const generatedDescription = event.description || (
    `Join us for ${event.event || event.name}, an engaging event designed for passionate participants. ` +
    `This event will be held at ${event.location || 'a premier venue'} and is open to ${event.qualification || 'all interested individuals'}. ` +
    `Expect a day filled with insightful discussions, networking opportunities, and hands-on activities. ` +
    `Participants will have the chance to learn from experienced leaders, collaborate on challenging topics, and showcase their skills in a supportive environment. ` +
    `Whether you're a newcomer or a seasoned attendee, this event promises valuable experiences and memories. ` +
    `Don't miss this opportunity to connect, learn, grow, and become part of a vibrant community!`
  );

  return (
    <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
      <div className="flex flex-col items-start w-full md:w-96">
        <img src={event.img} alt={event.event || event.name} className="w-full h-72 object-cover rounded-lg border border-blue-100 mb-2" />
        <div className="flex flex-col gap-1 w-full">
          <h3 className="text-gray-500 text-sm">{event.time || event.date}</h3>
          {event.location && (
            <h3 className="text-gray-500 text-sm">{event.location}</h3>
          )}
          {event.fee && (
            <h3 className="text-gray-500 text-sm">Fee: {event.fee}</h3>
          )}
          {event.qualification && (
            <h3 className="text-gray-500 text-sm">Qualification: {event.qualification}</h3>
          )}
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-3xl font-extrabold text-blue-800 mb-2">{event.event || event.name}</h1>
        <p className="text-gray-700 text-lg mb-4">{generatedDescription}</p>
      </div>
    </div>
  );
}

export const EventDefaultDetail = ({ event }) => {
  return (
    <div className="flex flex-col md:flex-row gap-10 items-start mb-12">
      <div className="flex flex-col items-start w-full md:w-96">
        <img src={event.img} alt={event.event || event.name} className="w-full h-72 object-cover rounded-lg border border-blue-100 mb-2" />
        <div className="flex flex-col gap-1 w-full">
          <h3 className="text-gray-500 text-sm">{event.time || event.date}</h3>
          {event.location && (
            <h3 className="text-gray-500 text-sm">{event.location}</h3>
          )}
          {event.fee && (
            <h3 className="text-gray-500 text-sm">Fee: {event.fee}</h3>
          )}
          {event.qualification && (
            <h3 className="text-gray-500 text-sm">Qualification: {event.qualification}</h3>
          )}
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-3xl font-extrabold text-blue-800 mb-2">{event.event || event.name}</h1>
        <p className="text-gray-700 text-lg mb-4">{event.description}cdlvmfld</p>
      </div>
    </div>
  );
}
