import '../../App.css'
import Footer from '../Footer';



function RecommendedSoftware() {

  const sections = [
    {
      id: "1",
      title: "Text Editor",
      name: "Gedit",
      description:
        "Default text editor for GNOME desktop. Usually pre-installed on most GNOME-based Linux distributions. If not installed, use your package manager.",
      commands: [
        { distro: "Debian/Ubuntu", command: "sudo apt install gedit" },
        { distro: "Fedora", command: "sudo dnf install gedit" },
      ],
      note: "VSCode",
      noteDescription: "Feature-rich code editor by Microsoft. To install, visit the official website.",
      noteCommand: "sudo snap install code --classic",
    },
    {
      id: "2",
      title: "Web Browser",
      name: "Firefox",
      description:
        "Default web browser in many Linux distributions (like Ubuntu, Debian, Fedora). Usually pre-installed. If not, you can install using:",
      commands: [
        { distro: "Debian/Ubuntu", command: "sudo apt install firefox" },
        { distro: "Fedora", command: "sudo dnf install firefox" },
      ],
    },
    {
      id: "3",
      title: "Media Players and Editors",
      name: "VLC (VideoLAN Client) Media Player",
      description:
        "Versatile media player that supports a wide variety of audio and video formats. Often pre-installed, but:",
      commands: [
        { distro: "Debian/Ubuntu", command: "sudo apt install vlc" },
        { distro: "Fedora", command: "sudo dnf install vlc" },
      ],
    },
    {
      id: "4",
      title: "Office & Productivity",
      name: "LibreOffice",
      description:
        "Full-featured, open-source office suite — a powerful alternative to Microsoft Office. Usually pre-installed on many Linux distributions. If not, you can install it with:",
      commands: [
        { distro: "Debian/Ubuntu", command: "sudo apt install libreoffice" },
        { distro: "Fedora", command: "sudo dnf install libreoffice" },
      ],
    },
    {
      id: "5",
      title: " System Utilities",
      name: "GParted",
      description:
        "GParted is a tool used to manage your hard drive or USB drive. Usually pre-installed but can be installed with:",
      commands: [
        { distro: "Debian/Ubuntu", command: "sudo apt install gparted" },
        { distro: "Fedora", command: "sudo dnf install gparted" },
      ],
    },
    {
      id: "6",
      title: "Development Tools",
      name: "Git",
      description:
        "Git is a free and open-source version control system. It helps you track changes in your code and collaborate with others. Whether you're working on personal projects or with a team, Git keeps your project organized and safe. Usually not preinstalled and can be installed using:",
      commands: [
        { distro: "Debian/Ubuntu", command: "sudo apt install git" },
        { distro: "Fedora", command: "sudo dnf install git" },
      ],
    },
  ]

  return (
    <div className="bg-[#121212] text-white font-mono text-lg p-6 flex flex-col gap-20 h-full">
      <div className='flex flex-col items-center gap-5 text-xs md:text-2xl'>
        <h1 className='text-4xl font-black'>Recommended Softwares for new glugies</h1>
        <p className='font-normal'>This page features essential free and open-source software that can enhance your Linux experience. All tools listed here are beginner-friendly and useful for daily use, development, or learning more about your system.</p>
      </div>
      <div className="w-full flex flex-col items-center gap-7 text-xs md:text-2xl">
        {sections.map((section) => (
          <div key={section.id} className="p-4 container flex rounded-2xl gap-3 flex-col">
            <div className="title text-black self-center text-wrap text-center text-xl md:text-4xl">
              {section.id}. {section.title}
            </div>
            <h2 className="text-2xl font-bold text-white">{section.name}</h2>
            <p className="text-gray-300">{section.description}</p>
            <div className="rounded-2xl p-3 flex flex-col bg-[#121212]">
              {section.commands.map((cmd, index) => (
                <div key={index} className="flex gap-4 justify-between  ">
                  <span className="text-white font-bold">{cmd.command}</span>
                  <span className="text-gray-500">#{cmd.distro}</span>
                </div>
              ))}
            </div>

            {section.note && (
              <div className="mt-4 space-y-2 rounded-2xl ">
                <h3 className="text-xl font-bold text-white">{section.note}</h3>
                <p className="text-gray-300">{section.noteDescription}</p>
                <div className="flex items-center space-x-4 bg-[#121212] rounded-2xl p-3">
                  <span className=" font-bold">{section.noteCommand}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}


export default RecommendedSoftware;