import studentsImg from '../assets/students.jpg'
import listImg from '../assets/list.jpg'
import certificateImg from '../assets/certificate.jpg'
import data from '../dummy-texts.json'

export default function HomePage() {
    return (
        <main id="home-page">
            <h2>{data.home.headline}</h2>
            <section>
                <img src={studentsImg} alt="A group of students" />
                <div>
                    <h3>{data.home.subHeadline}</h3>
                    <p>{data.home.title}</p>
                </div>
            </section>

            <section>
                <img src={listImg} alt="A list of sessions" />
                <div>
                    <h3>What we offer</h3>
                    <p>
                        We offer a variety of mentoring sessions, from
                        one-on-one mentoring to group mentoring sessions. Browse
                        our available sessions to find the one that best fits
                        your needs.
                    </p>
                </div>
            </section>
            <section>
                <img src={certificateImg} alt="A certificate" />
                <div>
                    <h3>What you get</h3>
                    <p>
                        No matter if you are a beginner or an experienced React
                        developer, we are here to help you level up your React
                        skills.
                    </p>
                </div>
            </section>
        </main>
    )
}
