import floor01 from "@/assets/images/floor_01.webp";
const HomePage = () => {
    return (
        <div className='flex h-screen flex-col items-center justify-center'>
            <img src={floor01} alt='floor01' />
            {/*<img src={floor01} alt='floor01' />*/}
            <p className='text-custom-color'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti, maxime!
            </p>
        </div>
    );
};
export default HomePage;
