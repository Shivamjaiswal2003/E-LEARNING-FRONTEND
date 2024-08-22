import React from 'react'
import './testimonials.css'

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      name: "John Yadav",
      position: "Student",
      message:
        "TecKashi has transformed the way I learn. The courses are detailed, and the instructors are very supportive.",
      image:
        "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 2,
      name: "Jane Patel",
      position: "Student",
      message:
        "The interactive lessons on TecKashi keep me engaged, and I've learned more here than anywhere else.",
      image:
        "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
    {
      id: 3,
      name: "Michael Singh",
      position: "Student",
      message:
        "The personalized learning experience at TecKashi is amazing. The quizzes and assignments are very effective.",
      image:
        "https://th.bing.com/th?q=Current+Bachelor&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    },
    {
      id: 4,
      name: "Lisa Kumari",
      position: "Student",
      message:
        "TecKashi's platform is user-friendly and offers a variety of courses that fit my needs perfectly.",
      image:
        "https://th.bing.com/th/id/OIP.GKAiW3oc2TWXVEeZAzrWOAHaJF?w=135&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    },
  ]

  return (
    <section className="testimonials">
      <h2>What our students say</h2>
      <div className="testimonials-cards">
        {testimonialsData.map((e) => (
          <div className="testimonial-card" key={e.id}>
            <div className="student-image">
              <img src={e.image} alt={e.name} />
            </div>

            <p className="message">{e.message}</p>

            <div className="info">
              <p className="name">{e.name}</p>
              <p className="position">{e.position}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
