import { MessageCircle } from 'lucide-react';
const PHONE='923001234567';
export default function MenuCard({item}){
 const message=encodeURIComponent(`Assalam o Alaikum, I want to order ${item.name}. Price: Rs. ${item.price}.`);
 return <article className="group overflow-hidden rounded-[1.6rem] border border-stone-200 bg-white shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-2xl">
   <div className="relative aspect-[4/3] overflow-hidden bg-stone-100">
    <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy"/>
    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold tracking-[.16em] text-stone-800 backdrop-blur">{item.tag}</div>
    <div className="absolute bottom-4 right-4 rounded-full bg-stone-950 px-3.5 py-2 text-sm font-bold text-white shadow-xl">Rs. {item.price.toLocaleString()}</div>
   </div>
   <div className="p-5 sm:p-6">
    <div className="mb-2 flex items-center justify-between gap-3"><span className="text-xs font-semibold uppercase tracking-[.18em] text-amber-700">{item.category}</span><span className="text-amber-500">★★★★★</span></div>
    <h3 className="font-serif text-2xl font-bold text-stone-950">{item.name}</h3>
    <p className="mt-2 min-h-12 text-sm leading-6 text-stone-500">{item.description}</p>
    <a href={`https://wa.me/${PHONE}?text=${message}`} target="_blank" rel="noreferrer" className="mt-5 flex min-h-11 items-center justify-center gap-2 rounded-xl bg-stone-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-amber-700"><MessageCircle size={17}/> Order on WhatsApp</a>
   </div>
 </article>
}
