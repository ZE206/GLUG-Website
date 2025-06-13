const AboutPage=()=>{
    return(
        <>
            <div className="h-[5rem]"></div>
            <div className="hidden md:flex justify-center">
                <div className="MainBox bg-gray-100 w-[80vw] md:h-[25vh] md:w-[85vw] lg:w-[60vw] p-4 text-center rounded-lg text-2xl font-primary font-semibold">
                    The GNU/Linux Users Group of NIT Calicut (GLUG NITC) is a student-run community that advocates for the use and understanding of Free and Open Source Software (FOSS). Founded with the belief that software should be accessible, transparent, and collaborative, GLUG NITC provides a platform for students to explore, contribute to, and create open-source tools and knowledge. We see technology not just as a utility, but as a space for exploration, freedom, and shared growth.
                </div>
            </div>
            <div className="h-[5rem] hidden md:block"></div>

            <div className="md:flex justify-center">
                <div className="grid grid-cols-1 p-3 md:p-0 md:ml-0 gap-7 md:grid-cols-2 ">
                    <div className="bg-custom_blue min-h-[35vh] md:min-h-[25vh] lg:min-h-[35vh] md:w-[40vw] lg:w-[20vw] text-white md:mr-10 rounded-2xl p-3 md:p-5">
                        <div className="text-2xl font-semibold text-center mb-10">
                            Our Philosophy
                        </div>
                        <div>
                            We believe that computing should empower users — not restrict them. Through open-source software, students can learn from real-world code, understand systems deeply, and contribute meaningfully to global projects. GLUG upholds these values by encouraging self-exploration, reproducibility, and transparency in computing.
                        </div>
                    </div>

                    <div className="bg-gray-100 min-h-[35vh] md:min-h-[25vh] lg:min-h-[35vh] md:w-[40vw] lg:w-[20vw] rounded-2xl p-3 md:p-5 md:mt-5">
                        <div className="text-2xl font-semibold text-center mb-10">
                            What We Do
                        </div>
                        <div>
                            GLUG does not host public workshops or technical events. Instead, our focus is on internal technical growth — we explore and experiment with GNU/Linux, FOSS tools, and systems software among ourselves. We document our learnings, share configurations, contribute to repositories, and keep a working archive of curated resources and student-led initiatives.
                        </div>
                    </div>
                    
                    <div className="bg-gray-100 min-h-[35vh] md:min-h-[25vh] lg:min-h-[35vh] md:w-[40vw] lg:w-[20vw] md:mr-10 rounded-2xl p-3 md:p-5">
                        <div className="text-2xl font-semibold text-center mb-10">
                            How We Learn
                        </div>
                        <div className="">
                            Rather than organize events or lectures, we rely on independent study, peer discussion, and collaborative problem solving. Members frequently test and document Linux distributions, write shell scripts, maintain dotfiles, and study topics such as version control, filesystems, or containerization — all through active self-learning and quiet rigor.
                        </div>
                    </div>

                    <div className="bg-custom_blue min-h-[35vh] md:min-h-[25vh] lg:min-h-[35vh] md:w-[40vw] lg:w-[20vw] text-white rounded-2xl p-3 md:p-5 md:mt-5">
                        <div className="text-2xl font-semibold text-center mb-10">
                            Community Structure
                        </div>
                        <div>
                            GLUG is informal by design. We don’t follow rigid structures or roles. Anyone genuinely interested in systems and open tools can join the conversation and contribute. Initiatives often begin from individual curiosity — someone experiments with tiling window managers, someone else maintains a custom zsh setup, and it grows from there.
                        </div>
                    </div>

                    <div className="bg-custom_blue min-h-[35vh] md:min-h-[25vh] lg:min-h-[35vh] md:w-[40vw] lg:w-[20vw] text-white md:mr-10 rounded-2xl p-3 md:p-5">
                        <div className="text-2xl font-semibold text-center mb-10">
                            Beyond Campus
                        </div>
                        <div>
                            Although GLUG is a campus-based student group, our tools, configs, and learning documents are accessible to anyone. Former members have gone on to contribute to open-source projects, intern with upstream communities, and continue working with Linux and FOSS tools beyond NITC.
                        </div>
                    </div>

                    <div className="bg-gray-100 min-h-[35vh] md:min-h-[25vh] lg:min-h-[35vh] md:w-[40vw] lg:w-[20vw] rounded-2xl p-3 md:p-5 md:mt-5">
                        <div className="text-2xl font-semibold text-center mb-10">
                            Our History
                        </div>
                        <div>
                            GLUG NITC grew from earlier FOSS initiatives on campus. Over time, it became a group focused more on technical depth than on event-based activity. We emphasize sustained technical curiosity, not visibility — and many of our members quietly maintain their own dotfiles, custom Linux installs, or local scripts without public fanfare.
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-[10rem]"></div>
        </>
    )
}

export default AboutPage;