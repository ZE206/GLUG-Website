import '../../App.css'
import Footer from '../Footer';
function Box(props: { icon: string; title: string,softwares:software[],idx:string }) {
    return (
        <div className='flex w-full px-15 py-10 gap-5 flex-col container rounded-2xl'>
            <div className='w-100 bg-orange-500 flex self-center justify-center items-center p-3 gap-1 text-black font-extrabold rounded-lg text-black-500'>
                <span>{props.idx}.</span>
                <div className='text-white'>{props.icon}</div>
                <div className=''>{props.title}</div>
            </div>
            <div className='flex flex-col self-start items-start gap-5'>
                {props.softwares.map((software: software, index: number) => (
                    <div key={index} className='flex flex-col gap-2 text-left text-white'>
                        <span className='text-left text-5xl'>{software.name}</span>
                        <span className='text-left'>{software.description}</span>
                        <span><img src={software.img}></img></span>
                    </div>
                ))}
            </div>
        </div>
    );
}






function RecommendedSoftware() {

    return (
        <div className ='flex font-primary bg  bg-black-500 text-2xl p-5 px-30  w-full h-full items-center bg flex gap-5 flex-col text-white'>
        <h1 className='font-bold'>Recommended Softwares for new glugies</h1>
        <h2 className='text-center text-lg w-1/2 mb-4'>
            This page features essential free and open-source software that can enhance your Linux experience.
            All tools listed here are beginner-friendly and useful for daily use,development,or learning more about your system.
        </h2>
        <div className = "flex flex-col gap-20 items-center justify-center w-full m-3">
        <Box icon="📝" title="Text Editor" softwares={recommendedSoftwareList[0]} idx="1" />
        <Box icon="🌐" title="Web Browser" softwares={recommendedSoftwareList[1]} idx="2" />
        <Box icon="🎞️" title="Media Players and Editors" softwares={recommendedSoftwareList[2]} idx="3" />
        <Box icon="📁" title="Office & Productivity" softwares={recommendedSoftwareList[3]} idx="4" />
        <Box icon="🔧" title="System Utilities" softwares={recommendedSoftwareList[4]} idx="5" />
        <Box icon="🧪" title="Development Tools" softwares={recommendedSoftwareList[5]} idx="6" />
        </div>
        <Footer />
        </div>
    );
}


class software {
    name: string;
    description: string;
    img: string;

    constructor(name: string, description: string, img: string) {
        this.name = name;
        this.description = description;
        this.img = img;
    }
}

const recommendedSoftwareList: software[][] = [
    [
        new software(
            'Gedit',
            "Default text editor for GNOME desktop. Usually pre-installed on most GNOME-based Linux distributions. If not installed, use your package manager.",
            '/src/assets/gedit.png' 
        ),
        new software(
            'VSCode',
            'Feature-rich code editor by Microsoft. To install, visit the official website.',
            '/src/assets/vscode.png'
        )
    ],
    [
        new software(
            'Firefox',
            'Default web browser in many Linux distributions (like Ubuntu, Debian, Fedora).\nUsually pre-installed.\nIf not, you can install it using:',
            '/src/assets/firefox.png'
        ),
    ],
    [
        new software(
            'VLC (VideoLAN Client) Media Player',
            'Versatile media player that supports almost all audio and video formats.\nOften pre-installed,if not:',
            '/src/assets/VLC.png'
        )
    ],
    [
        new software(
            'LibreOffice',
            'Full-featured, open source office suite — a powerful alternative to Microsoft Office\nUsually pre-installed on many Linux distributions.\nIf not, you can install it with.',
            '/src/assets/LibreOffice.png'
        )
    ], [
        new software(
            'GParted',
            'GParted is a tool used to manage your hard drive or USB drive.\nUsually pre-installed but can be installed with',
            '/src/assets/Gpart.png'
        )
    ],
    [
        new software(
            'Git',
            'Git is a free and open-source version control system. It helps you track changes in your code and collaborate with others.\n\nWhether you’re working alone or with a team, Git helps keep your projects organized and safe.\n\nUsually not preinstalled and can be installed using',
            '/src/assets/git.png'
        )
    ]

];
export default RecommendedSoftware;