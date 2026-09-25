"use client";
import {useState} from "react";
const cards=[
["🧾","Jeg har kjøpt noe","Ta bilde eller legg inn en kvittering"],
["💰","Jeg skal ha betalt","Lag faktura på noen få trykk"],
["🏦","Bank","Se hva som har kommet inn og gått ut"],
["📊","Hvordan går det?","Se omsetning, kostnader og resultat"]
];
export default function Home(){
 const [open,setOpen]=useState(null);
 return <main>
  <header><div><b>RALA</b><span>REGNSKAP</span></div><button>Testfirma ▾</button></header>
  <section className="hero"><small>OVERSIKT</small><h1>Hei 👋 Hva vil du gjøre?</h1><p>Regnskap uten regnskapsspråk.</p></section>
  <section className="grid">{cards.map((c,i)=><button className="card" key={c[1]} onClick={()=>setOpen(i)}><i>{c[0]}</i><strong>{c[1]}</strong><em>{c[2]}</em><b>→</b></button>)}</section>
  <section className="status"><div><small>DENNE MÅNEDEN</small><h2>Hvordan går det?</h2></div><div className="numbers"><p><span>Omsetning</span><b>248 500 kr</b></p><p><span>Kostnader</span><b>161 200 kr</b></p><p><span>Resultat</span><b>+87 300 kr</b></p><p><span>MVA til gode/betale</span><b>18 420 kr</b></p></div></section>
  <nav><button>⌂<span>Hjem</span></button><button>▤<span>Bilag</span></button><button>＋<span>Ny</span></button><button>◎<span>Bank</span></button><button>☰<span>Mer</span></button></nav>
  {open!==null&&<div className="shade" onClick={()=>setOpen(null)}><div className="modal" onClick={e=>e.stopPropagation()}><button className="x" onClick={()=>setOpen(null)}>×</button><i>{cards[open][0]}</i><h2>{cards[open][1]}</h2><p>{open===0?"Ta bilde av kvitteringen. RALA foreslår beløp, MVA og kategori – du godkjenner.":open===1?"Velg kunde, skriv hva du har gjort og beløpet. RALA gjør resten.":open===2?"Her matcher du bankbevegelser mot kvitteringer og fakturaer.": "Her får du tallene forklart enkelt – uten å måtte være regnskapsfører."}</p><button className="primary">Kjør demo</button><small>Prototype – ingen ekte bokføring ennå</small></div></div>}
 </main>
}