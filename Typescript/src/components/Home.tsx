
type Home = {
    name : string;
    courseNumber : number;
    isBest: boolean;
}

function Home(props:Home) {
  return (
    <div>
        {props.name} eğitimine hoşgeldiniz <br />
        {props.courseNumber} <br />
        {props.isBest 
        ?<p>En iyi React eğitimi bu!</p> 
        :<p>En iyi React eğitimi ileride bu eğitimi olacak!</p>} 
    </div>
  )
}

export default Home