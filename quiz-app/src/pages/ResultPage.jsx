export default function ResultPage({ score, total, onRestart }){
return(

<div className="text-center p-6">
      <h2 className="text-2xl font-bold mb-4">Résultat</h2>
      
      <p className="text-xl mb-4">
        Ton score : {score} / {total}
      </p>
      
      </div>



)



}