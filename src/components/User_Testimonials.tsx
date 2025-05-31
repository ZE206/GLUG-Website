import Testimony from "./Testimony";
import { useState } from "react";
const UserTestimonials=()=>{
    const testimonials=[
        {
          quote:"After watching the movie The Fifth Estate back in 2014, I got interested in things related to hacking and read a book on cybersecurity. Being the edgy teenager I was, I dualbooted Kali Linux on my parents’s laptop and tried to crack my own phone hotspot password using aircrack-ng. I couldn’t do it, but the whole process was too fun. This was my first exposure to anything FOSS. Although my point of entry into FOSS was through my interest in information safety and government surveillance, my interests quickly shifted from TailsOS and TOR to the Android Open-Source Project and LineageOS after reading about how much telemetry Google gets from our phones. Bricking my dad’s 50k rupee phone while trying to root it and degoogle it was definitely an unforgettable experience. I’m pretty sure my dad degoogled me that day. College was the time I started distro-hopping. I heard of github for the first time in my life in first year of college. ABSOLUTE GAMECHANGER. Sooo many programs!!! Anyways Idk how to conclude this. I use arch btw",
          author:"Thanvir Diouf"
        },
        {
          quote:"I have been a GIMP fanboy since 2018 with GIMP 2.10, always loved it. It helped me with a lot of stuff and I got used to its weird quirky stuff. All this up until last year when I was forced to install Photoshop against my will 🥺 for Tatva. But I immediately noticed that Photoshop was way better when it came to features, so I stuck with it. Never uninstalled GIMP though. It almost felt like I was cheating with a girlfriend that I never had.\nBut last week when I decided to give GIMP 3 a piece of my love 💖, I was amazed at how good it was. It felt like a whole new thing , yet gave me the same welcoming env as before. So I left that dumb Photoshop in the dark corner of my trash folder and started fresh with GIMP 3 again and I don't regret it till this day..",
          author:"Thiruchalvan"
        },
        {
          quote:"i was a naive young nonchalant first year when i fell in love with her--when i fell in love with foss. it started off slow. subtle glimpses of terminals, shy glances at laptops. i was mesmerised, she looked so difficult yet she was so beautiful. thats when i asked her seasoned suitors, \"how does one master linux?\". he laughed, \"you can never master her. you let her take you for a ride and you enjoy every step of the way\". I took the plunge. downloaded debain sid cos i like them ubstable. bricked (on) me so many times but i still kept going back. how could i go back to boring plain windows after her? she controlled every bare piece of hardware i had on me and i relished every command i demanded of her. then came the hoe phase. every distro, every flavour--i had to taste them all. some were too much for me and some just werent enough. thats when i found her best version. some called her mint but i'd only call her pudhina. perfect in form and function, i knew i had to settle down. this story might end here, but ours has just begun.",
          author:"Arun Nats"
        },
        {
          quote:"Linux be Good",
          author:"Fahad Ali Habeeb Pannikaveetil Thirunelli"
        },
        {
          quote:"fr",
          author:"Emir Ziyan"
        },
      ]
    
      const [currNo, setCurrNo]=useState(0);
      const total=testimonials.length>5? 5:testimonials.length;
      const rightArrowClick=()=>{
        setCurrNo((currNo+1)%total);
      }
    
      const leftArrowClick=()=>{
        if(currNo<=0) setCurrNo(total-1);
        else setCurrNo(currNo-1);
    
      }
    return(
        currNo < testimonials.length && currNo>=0 && <Testimony quote={testimonials[currNo].quote} author={testimonials[currNo].author} total={total} currNo={currNo} onNext={rightArrowClick} onPrev={leftArrowClick}/>
    )
}

export default UserTestimonials;