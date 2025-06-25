import '../../App.css'
import nav from '../../assets/navigation.png';
import file from '../../assets/filemgmt.png'
import sys from '../../assets/sysinfohelp.png'
import inst from '../../assets/install_software.png'
import ubuntu from '../../assets/ubuntu_install.png';

function titleCase(str: string) {
    return (
        <div className=' font-extrabold rounded-2xl  flex self-center  items-center justify-center text-2xl bg-orange-400 text-black p-5'>{str}</div>
    )
}
function terminalcode(str: string, str1: string = "", isgreentext: boolean = false) {
    if (isgreentext) {
        return (
            <div className='bg rounded-lg text-sm md:text-lg text-white font-mono rounded-2xl p-3 flex flex-col bg-[#121212]'>
                <span>ncmli dev  wifi connect <span className='text-green-500'>"Your network"</span> password <span className='text-green-500'>"Your password"</span></span>
            </div>
        )
    }
    return (
        <div className='bg p-3 flex justify-between rounded-lg text-sm md:text-lg text-white font-mono'>
            <span className='text-white'>{str}</span>
            <span className='text-gray-500 text-sm ml-2'>{str1}</span>
        </div>
    )
}
function Beginner() {
    return (
        <div className='flex font-primary bg w-full gap-5 flex-col items-center text-white px-3 '>
            <div className=' flex text-xl md:text-2xl flex-col gap-10 items-center justify-around w-full'>
                <div className='w-full flex flex-col container py-5 px-5 rounded-3xl items-center gap-5'>
                    {titleCase("Getting Started With Linux")}
                    <div className="whitespace-pre-line flex flex-col gap-10">
                        What is Linux?
                        <span>
                            Linux is a free and open source system based on UNIX. Unlike Windows or macOS, Linux gives you full control over your system and how it behaves.
                        </span>
                        Choosing your first Linux distro (Ubuntu, Fedora, Mint)
                        <span>
                            A Linux distribution (or distro) is a complete operating system built on top of the Linux kernel. Each distro is tailored for different users:
                        </span>
                        <ul className='flex flex-col gap-2'>
                            <li>1. Ubuntu for beginners and general users</li>
                            <li>2. Fedora for developers</li>
                            <li>3. Debian for stability lovers</li>
                            <li>4. Linux Mint for the Windows users switching to Linux</li>
                            <li>5. Pop!_OS for gamers and devs</li>
                        </ul>
                        <div className=" flex flex-col gap-5 items-start">
                            The 3 methods to run linux in your computers are
                            <ul className='mx-15'>
                                <li className='flex flex-col gap-2 mx-10'>
                                    <strong className='-mx-10'>a. Live USB:</strong> Run Linux directly from a USB stick.
                                </li>
                                <li className='flex flex-col gap-2 mx-10'>
                                    <strong className='-mx-10'>b .Dual boot:</strong> Install Linux alongside Windows.
                                </li>
                                <li className='flex flex-col gap-2 mx-10'>
                                    <strong className='-mx-10'>c .Virtual Machine:</strong> Run Linux inside Windows using software.
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className=' flex flex-col container px-5 py-10 rounded-3xl gap-7'>
                    {titleCase("Basic Terminal Commands")}
                    <span>What is the Terminal?</span>
                    <span className='mx-5'>The terminal is a text-based interface that lets you interact with your Linux system directly by typing commands.</span>
                    <span>Basic Linux commands</span>
                    <div className='text-2xl md:text-2xl font-bold'>1. NAVIGATION</div>
                    <div className='rounded-2xl p-3 flex flex-col bg-[#121212]'>
                        {terminalcode("pwd", "# show current directory")}
                        {terminalcode("ls", "# List files and folders here")}
                        {terminalcode("cd <folder-name>", "# Change directory")}
                        {terminalcode("ls l", "# List files with details")}
                        {terminalcode("cd ..", "# Go back to previous directory")}
                    </div>
                    <div className='text-2xl md:text-2xl font-bold'>2. FILE MANAGEMENT</div>
                    <div className='rounded-2xl p-3 flex flex-col bg-[#121212]'>
                        {terminalcode("mkdir <new-folder-name>", "# Create a new folder(e.g, mkdir my projects)")}
                        {terminalcode("cd <new-folder-name>", "# Go into a new folder")}
                        {terminalcode("touch <file-name>", "# Create a new file(e.g, touch myfile.txt)")}
                        {terminalcode('echo "Hello Linux" > <file-name.txt>', "# Delete a file(e.g, rm myfile.txt)")}
                        {terminalcode('cat <file-name>.txt', "# Delete a file(e.g, rm myfile.txt)")}
                        {terminalcode("cp <source> <destination>", "# Copy files or directories")}
                        {terminalcode("mv <source> <destination>", "# Move or rename files or directories")}
                        {terminalcode("rm <file-name>", "# Delete a file(e.g, rm myfile.txt)")}
                        {terminalcode("rm -r <folder-name>", "# Delete a folder and its contents(e.g, rm -r myfolder)")}
                    </div>
                    <div className='text-2xl md:text-2xl font-bold'>3. SYSTEM INFO AND HELP</div>
                    <div className='rounded-2xl p-3 flex flex-col bg-[#121212]'>
                        {terminalcode("whoami", "# Shows your username")}
                        {terminalcode("uname -a", "# Show system information")}
                        {terminalcode("man <command-name>", "# Show help for a command (e.g, man ls)")}
                        {terminalcode("clear", "# Clear the terminal screen")}
                    </div>
                    <div className='text-2xl md:text-2xl font-bold'>4. Installing software(DEBIAN AND UBUNTU BASED)</div>
                    <div>
                        <div className='rounded-2xl p-3 flex flex-col bg-[#121212]'>
                            {terminalcode("sudo apt update", "# Update package list")}
                            {terminalcode("sudo apt install <package-name>", "# Install a package (e.g, sudo apt install vlc)")}
                            {terminalcode("<package-name>", "# Run the installed package (e.g, vlc)")}
                            {terminalcode("sudo apt remove <package-name>", "# Uninstall a package (e.g, sudo apt remove vlc)")}
                        </div>

                        <span className='md:text-2xl py-10'>Linux uses “package managers” to install and remove software easily. A package manager downloads apps from official repositories and handles dependencies for you</span>
                    </div>
                </div>
                <div className=' flex flex-col container px-10 py-20 rounded-2xl gap-15'>
                    {titleCase("Installing and removing software")}
                    <span>A package is a compressed file that contains software, metadata, and instructions for installation</span>
                    <ul className='flex flex-col gap-2 '>
                        <li>Popular Package Managers:</li>
                        <li>1.Ubuntu/Debian : apt</li>
                        <li>2.Fedora:dnf</li>
                        <li>3.Arch Linux:pacman</li>
                        <li>steps:</li>
                        <li className='mx-10'>a.Open Terminal</li>
                        <li className='mx-10'>b.Type the command based on your distro.This is for Ubuntu:
                            <div className="rounded-2xl p-3 flex flex-col bg-[#121212]">
                                {terminalcode("sudo apt update", "# Updates the package list")}
                                {terminalcode("sudo apt install vlc", "#Installs VLC media player")}
                            </div>
                        </li>
                        <li className='mx-10'>c.Press Enter and enter your password when prompted.</li>
                    </ul>
                    Tip:always run update before installing new software
                </div>
                <div className=' flex flex-col container px-10 py-10 rounded-3xl gap-15'>
                    {titleCase("System Update and upgrade")}
                    <div className="mb-8">
                        <p className="text-gray-300 leading-relaxed md:text-2xl">
                            Keeping your Linux system up to date ensures better security, stability, and access to the latest features.
                        </p>
                    </div>
                    <div className="mb-8">
                        <h3 className="text-white font-semibold mb-4">Why Update?</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex items-start">
                                <span className="text-white mr-2">•</span>
                                Fixes bugs and vulnerabilities
                            </li>
                            <li className="flex items-start">
                                <span className="text-white mr-2">•</span>
                                Improves performance
                            </li>
                            <li className="flex items-start">
                                <span className="text-white mr-2">•</span>
                                Adds new features and updated software
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-8">
                        <div>
                            <h4 className="text-white font-semibold mb-4">1. Ubuntu / Debian</h4>
                            <div className="space-y-3 rounded-2xl p-3 flex flex-col bg-[#121212]">
                                {terminalcode("sudo apt update", "# Refresh the list of available packages and their versions")}
                                {terminalcode("sudo apt upgrade -y", "# Upgrade all installed packages to the latest versions")}

                            </div>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">2. Fedora</h4>
                            <div className="space-y-3 rounded-2xl p-3 flex flex-col bg-[#121212]">
                                {terminalcode("sudo dnf check-update", "# Check for available updates (optional)")}
                                {terminalcode("sudo dnf upgrade -y", "# Upgrade all packages to the latest versions")}

                            </div>
                        </div>
                        <div>
                            <h4 className="text-white font-semibold mb-4">3. Arch</h4>
                            <div className="bg p-3 rounded font-mono text-sm rounded-2xl p-3 flex flex-col bg-[#121212]">
                                {terminalcode("sudo pacman -Syu")}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col container px-10 py-10 rounded-3xl gap-15'>
                    {titleCase("Editing Files in the Terminal")}
                    <span className='text-lg md:text-2xl'>Editing files directly from the terminal is an essential skill for Linux users. There are several text editors available that work inside the terminal, letting you quickly view or modify configuration files and scripts without leaving the command line.</span>
                    {editinginterminal.map((item, index) => (
                        <div className='flex flex-col gap-5' key={index}>
                            {item.map((subitem, subind) => {
                                if (subind != 3) return <span>{subitem}</span>
                                else return terminalcode(subitem)
                            })}
                        </div>
                    ))}
                </div>
                <div className='flex flex-col container px-10  py-10 rounded-3xl gap-15'>
                    <span className='flex flex-col gap-5'>Check ip and network:<div className="rounded-2xl p-3 flex flex-col bg-[#121212]">{terminalcode("ip a", "# Show interfaces and IP's")}{terminalcode("ping google.com ", "#  Check connectivity")}{terminalcode("traceroute glug.org", "# Trace Packet Route")}</div></span>
                    <span className='flex flex-col gap-5'>Connect to Wi-Fi(Network Manager)<div className="rounded-2xl p-3 flex flex-col bg-[#121212]">{terminalcode("nmcli dev wifi list", "")}</div>{terminalcode("", "", true)}</span>
                </div>
                <div className='flex flex-col container px-10  py-10 rounded-3xl gap-15'>
                    {titleCase("Understanding the Linux File System")}
                    <div className='flex flex-col gap-5 bg p-3 divide-solid divide-white'>
                        {directories.map((item, index) => (
                            <div key={index} className='flex justify-between gap-2 text-sm md:text-2xl'>
                                <span className='text-white font-bold'>{item[0]}</span>
                                <span className='text-gray-300 border-left'>{item[1]}</span>
                            </div>
                        ))}
                    </div>
                    <div className='text-black rounded-3xl p-4 bg-[#D9D9D9]'>Warning: Do not change the file directory unless you know what you are doing</div>
                </div>
                <div className=' bg-[#D9D9D9] text-black flex flex-col px-5 md:px-10  py-5 md:py-10 rounded-3xl gap-15 w-7/8'>
                    {titleCase("Linux Resources")}
                    <ul className='flex flex-col gap-10 text-lg md:text-2xl '>
                        <li><a href="https://linuxcommand.org/tlcl.php" className='underline hover:text-orange-400 font-bold'>The Linux Command Line</a>-A beginner friendly book on terminal usage</li>
                        <li><a href="https://linuxjourney.com/" className=' underline hover:text-orange-400 font-bold'>Linux journey</a> An interactive journey through Linux concepts</li>
                        <li><a href="https://overapi.com/linux" className=' underline hover:text-orange-400 font-bold'>OverAPI Linux Cheatsheet</a> - A one-page Linux command reference</li>
                        <li><a href="https://overthewire.org/wargames/bandit/" className='underline hover:text-orange-400 font-bold'>OverTheWire</a> - Bandit Wargame - Learn Linux through fun security challenges</li>
                    </ul>
                </div>
            </div>
        </div>
    )

}


var editinginterminal: string[][] = [["1.nano",
    "Very beginner-friendly, easy to use.",
    "Commands are shown at the bottom, like Ctrl + O to save, Ctrl + X to exit.",
    "nano filename.txt",
    "Ctrl + O → Save",
    "Click Enter",
    "Ctrl + X → Exit",
],
[
    "2.vim",
    "More advanced, has a steeper learning curve.",
    "Has modes: normal mode(navigation),insert mode(editing).",
    "vim filename.txt",
    "i → Insert mode",
    "Esc → Command mode",
    ":w → Save",
    ":q → qui",
    ":wq → Save and quit",
]
]

const directories: string[][] = [
    ["Directory", "Description"], ["/", "Root of everything"], ["/home", "User files"], ["/etc", "Configuration files"], ["/usr", "Installed Software"], ["/var", "Logs,spools,variable data"], ["/tmp", "Temporary files"]
]





export default Beginner;