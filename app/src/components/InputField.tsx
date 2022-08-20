export const InputField = ({ name, value, onChange }) => {
  let filled = value.length > 0;
  let labelClass = filled ? '-top-6 text-sm': 'text-xl top-0 group-focus-within:-top-6 group-focus-within:text-sm';

  return (
    <div className='relative w-full mt-4 group'>
      <label className={`absolute block transition-all ${labelClass} text-white group-focus-within:text-pink`} htmlFor='email'>Personal Email</label>
      <input className='w-full pb-2 border-solid border-b-2 border-white text-white bg-transparent transition-all group-focus-within:border-pink' name='email' id="email" type="email" value={value} onChange={onChange}></input>
    </div>
  );
}