import Footer from './Footer'


const Main = ({ mainClickHandler }) => {
    return (
        <main role="main" onClick={mainClickHandler}>
                <div className="overlay"></div>
                <section id="intro">
                    <h1>My Work.</h1>
                    <p>Hi, I'm Jim.</p>
                    <p>On this page, you will be able to find links to designs that I'm currently working on, and have completed, for class assignments. Feel free to check them out as you please!</p>
                    <a href="https://jameskeseling.com/" className="button">My Portfolio</a>
                </section>

                <section id="i310">
                    <h1>i310 - Multimedia Arts and Technology</h1>
                    <p>Spring 2020.</p>
                    <ul>
                        <li><a href="https://jameskeseling.com/squirrel_club/" target="_blank">Squirrel Club</a></li>
                        <li><a href="https://jameskeseling.com/squirrel_club/wp-admin/" target="_blank">Squirrel Club Dashboard</a></li>
                    </ul>
                </section>

                <section id="a348">
                    <h1><a href="https://legacy.cs.indiana.edu/classes/a348/spr2020/" target="_blank">a348 - Maserting the World Wide Web</a></h1>
                    <p>Spring 2020.</p>
                    <ul>
                        <li><a href="http://silo.cs.indiana.edu:27192/" target="_blank">My Homepage</a></li>
                        <li><a href="https://iu.zoom.us/j/5193721742">Zoom Link</a></li>
                    </ul>
                </section>

                <section id="i211">
                    <h1>i211 - Information Infrastructure II</h1>
                    <p>Spring 2020.</p>
                    <ul>
                        <li><a href="https://cgi.sice.indiana.edu/~jkeselin/i211/">CGI Homepage</a></li>
                        <li><a href="https://cgi.sice.indiana.edu/~jkeselin/i211/cgi_tables.cgi">CGI Tables</a></li>
                    </ul>
                </section>

                <section id="j463">
                    <h1>j463 - Graphic Design I</h1>
                    <p>Spring 2020.</p>
                    <ul>
                        <li><a href="https://spark.adobe.com/page/CJsUAz7qAP2tK/" target="_blank">Learning Journal</a></li>
                    </ul>
                </section>

                <section id="g290">
                    <h1><a href="http://pages.iu.edu/~naguirre/fa19/pro/" target="_blank">g290 - Procedural Art</a></h1>
                    <p>Fall 2019.</p>
                    <ul>
                        <li><a href="https://codepen.io/jimmymk23/pen/PoYJMxY" target="_blank">HW1 - Drawing Primatives</a> and <a href="/g290/hw-1/" target="_blank">Final Product</a></li>
                        <li><a href="https://codepen.io/jimmymk23/pen/LYPQQOB" target="_blank">P1 - Interactive Art</a> and <a href="/g290/project-1/" target="_blank">Final Product</a></li>
                        <li><a href="https://codepen.io/jimmymk23/pen/ExYMOrr" target="_blank">HW2 - Interface Controller</a> and <a href="/g290/hw-2/" target="_blank">Final Product</a></li>
                        <li><a href="/g290/project-2/" target="_blank">P2 - Object Interface Controller</a></li>
                        <li><a href="/g290/project-3/wave.gif" target="_blank">P3 - Houdini Wave Gif</a></li>
                        <li><a href="https://www.behance.net/gallery/89579205/Liminality" target="_blank">P4 - Liminality</a></li>
                    </ul>
                </section>

                <section id="j362">
                    <h1><a href="https://sites.mediaschool.indiana.edu/mschj362-lhmajor-fall19/" target="_blank">j362 - Multimedia Storytelling</a></h1>
                    <p>Fall 2019.</p>
                    <ul>
                        <li><a href="https://sites.mediaschool.indiana.edu/mschj362-lhmajor-fall19/author/jkeselin/" target="_blank">Stories by James Keseling</a></li>
                        <li><a href="https://sites.mediaschool.indiana.edu/mschj362-lhmajor-fall19/2019/12/01/james-chestnut-ridge-equestrian-center-profile-with-lisa-post/" target="_blank">Lisa Post’s Chestnut Ridge Equestrian Center</a></li>
                        <li><a href="https://sites.mediaschool.indiana.edu/mschj362-lhmajor-fall19/2019/12/20/internet-retail-small-bus/" target="_blank">Internet Retail and Small Business</a></li>
                    </ul>
                </section>

                <section id="j363">
                    <h1><a href="http://pages.iu.edu/~naguirre/sp19/j363/" target="_blank">j363 - Web Design</a></h1>
                    <p>Spring 2019.</p>
                    <ul>
                        <li><a href="j363/homework/hw1-keseling-james/" target="_blank">HW1 - Resume</a></li>
                        <li><a href="j363/projects/p1-keseling-james/" target="_blank">P1 - All About Llamas</a></li>
                        <li><a href="j363/homework/hw2-keseling-james/" target="_blank">HW2 - "Pizza <i>Bruh</i>"</a></li>
                        <li><a href="j363/projects/p2-keseling-james/" target="_blank">P2 - The Shot Shop</a></li>
                        <li><a href="https://webflow.com/design/keseling-james-hw3-webflow-shotshop" target="_blank">HW3 - Webflow Design</a> and <a href="https://keseling-james-hw3-webflow-shotshop.webflow.io/" target="_blank">Final Product</a></li>
                        <li><a href="https://webflow.com/design/keseling-james-p3" target="_blank">P3 - Webflow Design</a> and <a href="https://keseling-james-p3.webflow.io/" target="_blank">Final Product</a></li>
                        <li><a href="https://codepen.io/jimmymk23/pen/EJmYOM" target="_blank">HW4 - JavaScript</a></li>
                        <li><a href="https://codepen.io/jimmymk23/pen/eoVWam" target="_blank">P4 - p5.js Project</a> and <a href="/j363/projects/p4-keseling-james/" target="_blank">Final Product</a></li>
                    </ul>
                </section>

                <section id="i101">
                    <h1><a href="i101/" target="_blank">i101 - Intro to Informatics</a></h1>
                    <p>Spring 2018.</p>
                    <ul>
                        <li><a href="i101/midterm/" target="_blank">Midterm Project</a></li>
                        <li><a href="i101/i101project.html" target="_blank">Group Final Project</a></li>
                    </ul>
                </section>

                <section id="play">
                    <h1>Playgrounds</h1>
                    <p>The websites posted in this section are meant for me to be able to practice my coding skills for class that are not specifically class asssignments.</p>
                    <ul>
                        <li><a href="personal/fractal-tree/" target="_blank">Fractal Tree</a> and <a href="personal/fractal-tree-class/" target="_blank">Fractal Tree (with Classes)</a></li>
                        <li><a href="personal/perlin-lines/" target="_blank">Perlin Lines</a></li>
                        <li><a href="personal/floating-bubbles/" target="_blank">Floating Bubbles</a></li>
                        <li><a href="personal/baby-face/" target="_blank">Matt's Face</a></li>
                        <li><a href="personal/falling-circles/" target="_blank">Falling Circles</a></li>
                        <li><a href="personal/explosion/" target="_blank">Explosion</a></li>
                        <li><a href="collections-old/" target="_blank">Collections (Retro)</a></li>
                    </ul>
                </section>

                <section id="inspo">
                    <h1>Web Design Inspiration</h1>
                    <ul>
                        <li><a href="https://thegraph.com/">The Graph</a></li>
                    </ul>
                </section>

                <section id="references">
                    <h1>References</h1>
                    <p>In this section, you can find references that I use to help me design my sites.</p>
                    <ul>
                        <li><a href="http://bg.siteorigin.com/" target="_blank">Background Image Generator</a></li>
                        <li><a href="https://www.svgbackgrounds.com/" target="_blank">SVG Backgrounds</a></li>
                        <li><a href="https://graphicburger.com/" target="_blank">Graphic Burger</a></li>
                        <li><a href="https://coolors.co/" target="_blank">Color Scheme Generator</a></li>
                        <li><a href="https://colorsinspo.com/">ColorsInspo.com</a></li>
                        <li><a href="https://www.pexels.com/" target="_blank">Pexels - Free Stock Images</a></li>
                        <li><a href="https://pixabay.com/" target="_blank">Pixabay - Free Stock Images</a></li>
                        <li><a href="https://webgradients.com/" target="_blank">Color Gradients</a></li>
                    </ul>
                </section>
                <Footer />
            </main>
    );
}

export default Main;