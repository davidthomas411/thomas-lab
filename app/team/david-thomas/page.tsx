import Link from "next/link"
import {
  ArrowLeft,
  ExternalLink,
  User,
  Globe,
  Github,
  Linkedin,
  GraduationCap,
  Briefcase,
  Award,
  FlaskConical,
  Stethoscope,
  Mic,
} from "lucide-react"
import SiteLayout from "@/components/site-layout"
import ScrollAnimation from "@/components/scroll-animation"
import FaceTracker from "@/components/face-tracker"

const linkedInProfileUrl = "https://www.linkedin.com/in/david-thomas-b0550b39"
const githubProfileUrl = "https://github.com/davidthomas411"
const labWebsiteUrl = "https://thomas-lab.com"
const profileImageUrl = "https://gruc9opbjll8ofcl.public.blob.vercel-storage.com/faces/DT_1/gaze_px0p0_py0p0_256.webp"

const education = [
  "2014-2016: Certificate in Medical Physics, University of California Los Angeles (UCLA)",
  "2005-2010: PhD in Medical Physics, University of Edinburgh",
  "2004-2005: MS in Electrical and Computer Engineering, Georgia Institute of Technology",
  "2000-2004: MPhys in Physics, University of St Andrews",
]

const appointments = [
  "2024-present: Associate Professor in Medical Physics, Thomas Jefferson University",
  "2022-2024: Associate Professor in Medical Physics, University of Colorado School of Medicine",
  "2016-2022: Assistant Professor in Medical Physics, University of Colorado School of Medicine",
  "2024-present: Enterprise Director of Quality & Safety, Medical Physics, Department of Radiation Oncology, Thomas Jefferson University",
  "2018-2024: Deputy Residency Director, Medical Physics Residency Program, CU Anschutz",
]

const certificationAndLeadership = [
  "2017: Diplomate, American Board of Radiology (Therapeutic Medical Physics)",
  "2018: Qualified Expert Registered Medical Physicist (#305), Colorado Department of Public Health and Environment",
  "2020-2024: Senior Medical Physics Editor, British Journal of Radiology | Open",
  "AAPM Radiation Therapy Patient Safety Subcommittee (committee member, 2023-2024)",
]

const awards = [
  "2024: Science Council Session 'Innovations in Medical Physics' award, 66th AAPM Annual Meeting (Senior Author)",
  "2023: Best-in-Physics Award, 65th AAPM Annual Meeting (Senior Author)",
  "2016, 2015, 2014, 2013: Norm Baily Research Award, 1st Place (AAPM Southern California Chapter)",
  "2013: Best-in-Physics Award, AAPM 55th Annual Meeting (First Author)",
  "2011: Young Investigators Technical Research Award, 16th European Contrast Ultrasound Symposium",
]

const researchAndFunding = [
  "Current PI (2026-2028): 'Depth from Vision: Computer Vision for Anatomy-Aware SGRT' (Siemens Healthineers/Varian), total costs awarded: $260,000",
  "Current PI (2024-2027): 'Computer Vision applications in Radiation Therapy' (SKCCC startup funds), total costs awarded: $150,000",
  "PI (2022-2024): NIH R21 'Endoskeletal nanodrops for x-ray acoustic dosimetry', total costs awarded: $375,000",
  "PI (2023-2024): Computer vision enhanced breast DIBH-RT, total costs awarded: $100,000",
  "PI (2023-2024): Computer vision assisted alignment for pancreatic SBRT, total costs awarded: $50,000",
]

const clinicalAndTeaching = [
  "PI for investigator-initiated clinical trial: Computer Vision enhanced breast DIBH-RT protocol (2024)",
  "Co-PI: Dynamic contrast-enhanced CT liver trial for RT outcome assessment (2019)",
  "Lead physicist for SRS treatment machine and department lead for ARIA R&V (2019-2024)",
  "Developed and led ABR board preparation curriculum for residents and postdoctoral fellows (2020-2024)",
  "Primary and secondary mentor across multiple residency rotations and graduate/postdoctoral trainees",
]

const selectedLectures = [
  "February 2, 2026: 'AI in Action: Practical Applications of Artificial Intelligence in Cancer Research' (SKCCC CRTEC Seminar Series)",
  "October 28, 2025: Foundations of AI for Cancer Training, 21st Annual Cancer Biology Retreat",
  "July 2024: AAPM Science Council Session: Innovations in Medical Physics",
  "July 2023: AAPM Best in Physics Session, 'Computer Vision Assisted Alignment for SBRT'",
  "May 2023: American Radium Society, 'Computer Vision assisted Collision Avoidance for Radiation Therapy'",
]

export default function DavidThomasPage() {
  return (
    <SiteLayout>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-jefferson-deepBlue text-white jefferson-clean-bg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[280px_1fr] lg:gap-12 items-start">
            <ScrollAnimation className="space-y-4">
              <div className="flex justify-center lg:justify-start">
                <div className="h-[280px] w-[280px] overflow-hidden rounded-full ring-4 ring-white shadow-xl">
                  <FaceTracker
                    blobFaceId="DT_1"
                    fallbackImage={profileImageUrl}
                    alt="Dr. David Thomas"
                    size={280}
                    className="rounded-full"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <a
                  href={linkedInProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jefferson-outline-button inline-flex w-full justify-center"
                >
                  LinkedIn Profile
                  <Linkedin className="ml-2 h-4 w-4" />
                </a>
                <a
                  href={githubProfileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jefferson-outline-button inline-flex w-full justify-center"
                >
                  GitHub
                  <Github className="ml-2 h-4 w-4" />
                </a>
                <a
                  href={labWebsiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="jefferson-outline-button inline-flex w-full justify-center"
                >
                  Lab Website
                  <Globe className="ml-2 h-4 w-4" />
                </a>
              </div>
            </ScrollAnimation>

            <ScrollAnimation className="space-y-5" delay={1}>
              <div className="inline-block text-jefferson-brightBlue text-sm font-medium uppercase tracking-wider">
                Principal Investigator
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Dr. David H. Thomas, PhD, DABR</h1>
              <p className="text-jefferson-brightBlue text-lg">
                Associate Professor and Enterprise Director of Quality & Safety, Medical Physics
              </p>
              <p className="text-gray-200 max-w-3xl">
                Dr. David Thomas is an academic medical physicist with over 15 years of experience in radiation
                oncology and computational imaging. His research program focuses on AI-enabled treatment planning,
                computer vision for treatment guidance, and real-time monitoring tools that improve treatment accuracy
                and patient safety.
              </p>
              <p className="text-gray-200 max-w-3xl">
                Across his career, he has secured substantial competitive and industry research support, led
                interdisciplinary translational projects, and authored an extensive body of publications and conference
                presentations spanning medical physics, image guidance, and radiation oncology informatics.
              </p>
              <Link href="/team" className="jefferson-outline-button inline-flex">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Team
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-10">
            <ScrollAnimation className="prose prose-lg max-w-none">
              <div className="flex items-center mb-8">
                <div className="h-12 w-12 rounded-full bg-jefferson-brightBlue flex items-center justify-center text-jefferson-deepBlue">
                  <User className="h-6 w-6" />
                </div>
                <div className="ml-4">
                  <h2 className="text-xl font-bold text-jefferson-deepBlue m-0">Curriculum Vitae Overview</h2>
                  <p className="text-jefferson-slate m-0">
                    Professional profile, academic appointments, and selected contributions.
                  </p>
                </div>
              </div>
            </ScrollAnimation>

            <div className="grid gap-6 md:grid-cols-2">
              <ScrollAnimation>
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 flex items-center text-xl font-bold text-jefferson-deepBlue">
                    <GraduationCap className="mr-2 h-5 w-5 text-jefferson-brightBlue" />
                    Education
                  </h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-jefferson-slate">
                    {education.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={1}>
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 flex items-center text-xl font-bold text-jefferson-deepBlue">
                    <Briefcase className="mr-2 h-5 w-5 text-jefferson-brightBlue" />
                    Appointments
                  </h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-jefferson-slate">
                    {appointments.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ScrollAnimation>
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 flex items-center text-xl font-bold text-jefferson-deepBlue">
                    <Award className="mr-2 h-5 w-5 text-jefferson-brightBlue" />
                    Awards and Recognition
                  </h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-jefferson-slate">
                    {awards.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={1}>
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 flex items-center text-xl font-bold text-jefferson-deepBlue">
                    <FlaskConical className="mr-2 h-5 w-5 text-jefferson-brightBlue" />
                    Research and Funding
                  </h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-jefferson-slate">
                    {researchAndFunding.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <ScrollAnimation>
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 flex items-center text-xl font-bold text-jefferson-deepBlue">
                    <Stethoscope className="mr-2 h-5 w-5 text-jefferson-brightBlue" />
                    Clinical and Teaching Leadership
                  </h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-jefferson-slate">
                    {clinicalAndTeaching.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>

              <ScrollAnimation delay={1}>
                <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-4 flex items-center text-xl font-bold text-jefferson-deepBlue">
                    <Mic className="mr-2 h-5 w-5 text-jefferson-brightBlue" />
                    Selected Invited Lectures
                  </h3>
                  <ul className="space-y-2 text-sm leading-relaxed text-jefferson-slate">
                    {selectedLectures.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </ScrollAnimation>
            </div>

            <ScrollAnimation>
              <div className="rounded-xl border border-gray-200 bg-jefferson-silver p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-bold text-jefferson-deepBlue">Certification, Editorial, and Committee Service</h3>
                <ul className="space-y-2 text-sm leading-relaxed text-jefferson-slate">
                  {certificationAndLeadership.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    href={linkedInProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-jefferson-brightBlue hover:underline"
                  >
                    LinkedIn <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                  <a
                    href={githubProfileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-jefferson-brightBlue hover:underline"
                  >
                    GitHub <ExternalLink className="ml-1 h-4 w-4" />
                  </a>
                  <Link href="/publications" className="inline-flex items-center text-jefferson-brightBlue hover:underline">
                    Publications <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                  <Link href="/presentations" className="inline-flex items-center text-jefferson-brightBlue hover:underline">
                    Presentations <ExternalLink className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>
    </SiteLayout>
  )
}
