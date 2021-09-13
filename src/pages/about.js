import React from 'react'
import Layout from "../components/Layout";
import PageContentLayout from '../components/PageContentLayout'

const About = () => {
    const desktopSpecs = [
        {
            component: 'CPU',
            name: 'Ryzen 9 3900X',
            link: 'https://www.amazon.com/gp/product/B07SXMZLP9/ref=ppx_yo_dt_b_asin_title_o02_s00?ie=UTF8&psc=1'
        },
        {
            component: 'GPU',
            name: 'GeForce RTX 2080 Super',
            link: 'https://www.amazon.com/Gigabyte-Windforce-Gv-N208SGAMING-OC-8GC-REV2-0/dp/B07ZK765CT'
        },
        {
            component: 'MotherBoard',
            name: 'X570 Aorus Pro Wifi',
            link: 'https://www.amazon.com/gp/product/B07STNZF9L/ref=ppx_yo_dt_b_asin_title_o03_s01?ie=UTF8&psc=1'
        },
        {
            component: 'RAM',
            name: '2 16GB G. Skill Trident Z Neo Series DDR4 3600MHz',
            link: 'https://www.amazon.com/gp/product/B07WTS8T2W/ref=ppx_yo_dt_b_asin_title_o03_s00?ie=UTF8&psc=1'
        },
        {
            component: 'Storage',
            name: '2 1TB Sabrent NVMe M.2 SSD',
            link: 'https://www.amazon.com/gp/product/B07TKYWB3K/ref=ppx_yo_dt_b_asin_title_o01_s00?ie=UTF8&psc=1'
        },
        {
            component: 'PSU',
            name: 'Corsair RM850x Gold',
            link: 'https://www.amazon.com/gp/product/B079H5WNXN/ref=ppx_yo_dt_b_asin_title_o04_s00?ie=UTF8&psc=1'
        },
        {
            component: 'CPU Cooler',
            name: 'Noctua NH-D15S Black',
            link: 'https://www.amazon.com/Noctua-NH-D15S-chromax-Black-Premium-Dual-Tower/dp/B08HM1T6RL/ref=sr_1_4?crid=26K08N81C2DH3&dchild=1&keywords=noctua+dh-15&qid=1608919768&sprefix=noctua+dh%2Caps%2C208&sr=8-4'
        },
        {
            component: 'Case',
            name: 'Corsair Obsidian 500D RGB SE Mid-Tower',
            link: 'https://www.amazon.com/gp/product/B07C46L1D8/ref=ppx_yo_dt_b_asin_title_o02_s01?ie=UTF8&psc=1'
        },
    ]

    const laptopSpecs = [
        {
            component: 'CPU',
            name: 'Intel i7 10710U'
        },
        {
            component: 'RAM',
            name: '16GB'
        },
        {
            component: 'Storage',
            name: '1TB'
        },
        {
            component: 'Display',
            name: '4k'
        },
    ]

    return (
        <Layout>
            <PageContentLayout>
                <h2 className={'content-header'}>About Page</h2>
                <p>
                    This about page is just going to talk about some of my interests and experiences with them.
                    I work with a few different languages and tools and always enjoy the opportunities to share what I have
                    learned with them.
                </p>
                <h3 className={'sub-content-header'}>Linux</h3>
                <p>
                    I first started using Linux as a primary operating system around October of 2019 and began by using Ubuntu
                    18.04 Bionic Beaver. Around this time 19.10 came out, this version called Eoan Ermine so I decided to give
                    it a shot. At the time I noticed no difference but it was a fun and new experience to try and upgrade to the
                    latest version of Ubuntu. I really enjoyed the terminal-based approach to installing and upgrading
                    applications, as well as the security of going through a package manager. By default, Ubuntu sets the user
                    up for a very nice user experience and is a great distro for first time Linux users. Because of this I soon
                    fell in love with Linux and had no regrets adopting the OS. This assurance in Ubuntu was only further
                    solidified in the default aesthetic that comes along with Ubuntu's Gnome (I pronounce it guh-nome but I
                    won't
                    hold it against you if you pronounce it like garden gnome) desktop. This desktop environment (DE) was a nice
                    spin on the Mac environment Apple users have grown accustomed too but offered enough of a difference that
                    it didn't feel like an Apple product.
                </p>
                <p>
                    After a few months of using Ubuntu and messing around in it, I wanted to advance further in my knowledge of
                    Linux and in search for enlightenment I kept hearing about a distro called Arch Linux which emphasized the
                    rolling release concept as well and minimalism. I heard about the
                    complexities of installing Arch due to the lack of a graphical installer and the minimalist approach of this
                    distro, which is very different from common approaches of install Linux distros, so naturally I gave it a
                    shot.
                    This hour long experience of installing Arch as a new Linux user has arguably taught me more about computer
                    science in general than any semester of classes I have taken through my 5 year's of college. Through the
                    help of the <a href={'https://wiki.archlinux.org/'}>Arch Wiki</a> (which is a phenomenal resource) I was
                    able
                    to successfully install Arch on my desktop using KDE Plasma 5 as a DE. I used this set up for a few
                    months bouncing between Plasma and Gnome on Arch until around mid 2020 I started using a window manager
                    (WM),
                    specifically i3 on my laptop and adopting it on my desktop in December 2020. I found out about WM's through
                    two great Youtubers, <a href={'https://www.youtube.com/channel/UC2eYFnH61tmytImy1mTYvhA'}>Luke Smith</a> and <a href={'https://www.youtube.com/channel/UCVls1GmFKf6WlTraIb_IaJg'}>DistroTube</a>.
                    There is a bit of a learning curve to WM's but after a couple weeks I got it down (mostly) and really
                    enjoyed the productivity gains from it.
                </p>
                <p>
                    Arch Linux as well as Linux as a whole, has been a great experience and if you're interested in
                    trying something new that also provides you with better privacy and security, I strongly suggest trying
                    Linux.
                    If you're not particularly tech-savvy I would suggest trying out <a href={'https://ubuntu.com/'}>Ubuntu</a>, <a href={'https://linuxmint.com/'}>Linux Mint</a>,
                    or <a href={'https://pop.system76.com/'}>Pop! OS</a>.
                    If you're looking for a good beginner OS but want to try the rolling release concept, then take a look
                    at <a href={'https://manjaro.org/'}>Manjaro</a> or <a href={'https://getfedora.org/'}>Fedora</a>. Rolling
                    release distros typically require a little more computer-science-related knowledge due to the quick releases
                    of applications in these distros. Because of this sometimes compatibility of applications can break and
                    require manual effort to get them to cooperate again but on the flip-side you get bleeding edge versions of
                    the apps you're using, which is pretty neat. With this said if you want to try a great distro and improve
                    your knowledge of OS's then look no further than Arch Linux. This is my favorite distro and as of right now I have
                    no intention of moving away from it.
                </p>
                <h3 className={'sub-content-header'}>Programming</h3>
                <p>
                    
                </p>
            </PageContentLayout>
        </Layout>
    )
}

export default About
