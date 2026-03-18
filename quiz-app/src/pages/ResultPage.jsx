export default function ResultPage({ score, total, onRestart }){
return(

<div className="text-center p-6">
      <h2 className="text-2xl font-bold mb-4">🏆 “Un vrai joueur n’abandonne jamais. Relance une partie !”</h2>
      
      <p className="text-xl mb-4">
        votre score : {score} / {total}
      </p>
       <button
        onClick={onRestart}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        restart
      </button>
      
      </div>



)



}