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
                    <h3>{data.home.listSessionHeadline}</h3>
                    <p>{data.home.listSesstionTitle}</p>
                </div>
            </section>
            <section>
                <img src={certificateImg} alt="A certificate" />
                <div>
                    <h3>{data.home.certificationHeadline}</h3>
                    <p>{data.home.certificationTitle}</p>
                </div>
            </section>
        </main>
    )
}
