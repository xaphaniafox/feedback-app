import Card from "../components/shared/Card";

function AboutPage() {
  return (
    <Card>
      <div className="about">
        <h1>About this project</h1>
        <p>This is a React app to leave feedback for a product or service</p>
        <p>version 1.0.0</p>
        <p><a href='/'>Back to home</a></p>
      </div>
    </Card>
  )
}

export default AboutPage
