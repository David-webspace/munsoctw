import team from '../../data/team';

function SectionTitle({ children }) {
  return (
    <h2 className="text-2xl font-bold text-blue-700 mb-4 mt-10 first:mt-0 flex items-center gap-2">
      <span className="inline-block w-1 h-6 bg-blue-500 rounded-full mr-1" />
      {children}
    </h2>
  );
}

export default function AboutPage() {
  return (
    <main className="max-w-5xl mx-auto p-6">
      <SectionTitle>What is MUN?</SectionTitle>
      <p className="mb-6 text-gray-700">
        Model United Nations (MUN) is an educational simulation where students role-play as delegates to the United Nations and simulate UN committees. It helps participants develop skills in diplomacy, debate, and international relations.
      </p>

      <SectionTitle>What We Do</SectionTitle>
      <ul className="list-disc ml-6 mb-6 text-gray-700">
        <li>Organize and participate in MUN conferences locally and internationally.</li>
        <li>Host workshops and training sessions on public speaking, negotiation, and global issues.</li>
        <li>Foster a community passionate about international affairs and leadership.</li>
      </ul>

       {/* Our Organizing Experiences Section */}
      <SectionTitle>Our Organizing Experiences</SectionTitle>
      <div className="mb-12 bg-white rounded-xl border border-blue-100 shadow p-6">
        <ul className="list-disc pl-6 space-y-3 text-gray-700">
          <li>MST&apos;s core team members collectively hold over 150 instances of delegate roles, 100 chairing positions, and 50 experiences in organizing conferences. While MUN organizations both nationally and internationally are gradually recovering from the impact of the pandemic, our society has successfully organized several in-person conferences.</li>
          <li>To foster local community connections, we organized a spring training program that brought together the top 100 high school MUN club members, creating an irreplaceable networking platform for them. In order to validate our benchmark position, we independently hosted Re_MUN, inviting the most seasoned MUN delegates to demonstrate exemplary MUN practices.</li>
          <li>Furthermore, these accomplishments enabled us to form a delegation and participate in the Harvard WorldMUN Conference in Paris, thus serving as a catalyst for this bidding opportunity.</li>
        </ul>
      </div>

      <SectionTitle>Meet the Team</SectionTitle>
      <div className="grid gap-8 sm:grid-cols-2">
        {team.map(member => (
          <div key={member.name} className="flex flex-col bg-white rounded-xl shadow p-6 border border-blue-100 h-full">
            <div className="flex items-center gap-4 mb-3">
              <img src={member.avatar} alt={member.name} className="w-20 h-20 object-cover rounded-full border-2 border-blue-200" />
              <div>
                <h3 className="text-lg font-bold text-blue-800">{member.name}</h3>
                <p className="text-blue-600 font-semibold">{member.title}</p>
                <p className="text-gray-500 text-xs mt-1">{member.university}</p>
              </div>
            </div>
            <div className="text-gray-700 text-sm space-y-2">
              {member.content.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
