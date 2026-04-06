

import React, { useEffect, useState } from "react";

const CorporateEventPage = () => {

const [open,setOpen]=useState(null)

const faqs=[
{
q:"Why should I choose Brij Bhog for corporate catering?",
a:"Brij Bhog provides professional corporate catering with delicious menus, hygienic food preparation and punctual service."
},
{
q:"What type of corporate events do you cater?",
a:"We provide catering for conferences, office meetings, seminars, corporate parties and business events."
},
{
q:"Do you offer customized corporate menus?",
a:"Yes, we design menus according to your company event requirements and guest preferences."
},
{
q:"Do you provide live food counters for corporate events?",
a:"Yes, we offer live counters including chaat, South Indian, Chinese and dessert stations."
}
]

useEffect(()=>{
window.scrollTo(0,0)
},[])

return(

<div className="w-full bg-white text-gray-700">

{/* HERO */}

<div className="bg-black text-white py-32 text-center">

<h1 className="text-4xl tracking-widest font-light">
CORPORATE CATERING SERVICES
</h1>

<p className="text-gray-400 mt-3">
HOME / CORPORATE CATERING
</p>

</div>

{/* INTRO */}

<div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">

<img
src="https://images.unsplash.com/photo-1555244162-803834f70033"
className="h-[380px] object-cover w-full rounded-lg"
/>

<div>

<p className="italic text-gray-400 mb-2">
Professional Corporate Catering
</p>

<h2 className="text-4xl font-serif mb-5">
BRIJ BHOG CORPORATE CATERING
</h2>

<p className="text-sm leading-relaxed mb-5">
Brij Bhog Catering provides premium catering services for corporate
events in Bhopal. From office meetings and seminars to conferences
and corporate celebrations, our team ensures delicious food,
professional service and elegant presentation for every event.
</p>

<p className="text-sm leading-relaxed">
Our experienced chefs prepare a wide range of vegetarian dishes
that are perfect for corporate gatherings and business events.
</p>

</div>

</div>

{/* CORPORATE SERVICES */}

<div className="max-w-7xl mx-auto px-6 py-20">

<h2 className="text-3xl font-serif text-center mb-12">
Our Corporate Catering Services
</h2>

<div className="grid md:grid-cols-3 gap-10">

<div className="border p-6 rounded-lg">
<h3 className="text-xl font-semibold mb-3">
Corporate Meetings Catering
</h3>
<p className="text-sm text-gray-600">
Professional catering for office meetings, board meetings and
business lunches.
</p>
</div>

<div className="border p-6 rounded-lg">
<h3 className="text-xl font-semibold mb-3">
Conference & Seminar Catering
</h3>
<p className="text-sm text-gray-600">
Buffet and meal services for conferences, seminars and training events.
</p>
</div>

<div className="border p-6 rounded-lg">
<h3 className="text-xl font-semibold mb-3">
Corporate Party Catering
</h3>
<p className="text-sm text-gray-600">
Catering for office parties, company celebrations and annual events.
</p>
</div>

</div>

</div>

{/* GALLERY */}

<div className="bg-black text-white py-20 text-center">

<h2 className="text-4xl font-serif mb-4">
CORPORATE EVENT HIGHLIGHTS
</h2>

<p className="max-w-3xl mx-auto text-gray-400 text-sm">
Take a look at our professional catering setups for corporate events.
</p>

<div className="grid md:grid-cols-2 gap-8 mt-10 max-w-6xl mx-auto px-6">

<img src="https://images.unsplash.com/photo-1505236858219-8359eb29e329" />
<img src="https://images.unsplash.com/photo-1555244162-803834f70033" />

</div>

</div>

{/* FAQ */}

<div className="max-w-4xl mx-auto py-20 px-6">

<h2 className="text-center text-4xl font-serif mb-10">
FREQUENTLY ASKED QUESTIONS
</h2>

{faqs.map((item,index)=>(
<div
key={index}
className="border-b py-4 cursor-pointer"
onClick={()=>setOpen(open===index?null:index)}
>

<div className="flex justify-between">
<h3>{item.q}</h3>
<span>⌄</span>
</div>

{open===index && (
<p className="text-sm text-gray-500 mt-2">{item.a}</p>
)}

</div>
))}

</div>

</div>

)
}

export default CorporateEventPage