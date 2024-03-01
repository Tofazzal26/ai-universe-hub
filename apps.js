

const loadData = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then((res) => res.json())
        .then( (data) => cardData(data))

}



const cardData = (data) => {
    console.log(data);
    const cardDetail = data.data.tools;
    const divContainer = document.getElementById('card-container');
    cardDetail.forEach((detail) => {
        const div = document.createElement('div');
        div.innerHTML = ` <div class="card border-2">
                <figure><img class="h-[200px]" src="${detail?.image}" alt="Shoes" /></figure>
                <div class="card-body">
                    <div class="border-b-2 space-y-1 pb-6">
                        <h2 class="text-2xl font-semibold text-black mb-4">Features</h2>
                        <p class="text-base text-[#575757]">1. Natural language processing</p>
                        <p class="text-base text-[#575757]">2. Contextual understanding</p>
                        <p class="text-base text-[#575757]">3. Text generation</p>
                    </div>
                    <div class="flex justify-between items-center mt-4">
                        <div>
                            <h2 class="text-2xl font-semibold text-black mb-4">${detail.name}</h2>
                            <div class="flex gap-3">
                                <svg width="19.500000" height="19.500000" viewBox="0 0 19.5 19.5" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <desc>
                                            Created with Pixso.
                                    </desc>
                                    <defs/>
                                    <path id="Vector" d="M4.5 0.75L4.5 3M15 0.75L15 3M0.75 5.25C0.75 4.65326 0.987061 4.08096 1.40906 3.659C1.83093 3.23706 2.40332 3 3 3L16.5 3C17.0967 3 17.6691 3.23706 18.0909 3.659C18.5129 4.08096 18.75 4.65326 18.75 5.25L18.75 16.5C18.75 17.0967 18.5129 17.669 18.0909 18.091C17.6691 18.5129 17.0967 18.75 16.5 18.75L3 18.75C2.40332 18.75 1.83093 18.5129 1.40906 18.091C0.987061 17.669 0.75 17.0967 0.75 16.5L0.75 5.25ZM0.75 16.5L0.75 9C0.75 8.40326 0.987061 7.83096 1.40906 7.409C1.83093 6.98706 2.40332 6.75 3 6.75L16.5 6.75C17.0967 6.75 17.6691 6.98706 18.0909 7.409C18.5129 7.83096 18.75 8.40326 18.75 9L18.75 16.5M9.75806 10.5L9.75806 10.508L9.75 10.508L9.75 10.5L9.75806 10.5ZM9.75806 12.75L9.75806 12.758L9.75 12.758L9.75 12.75L9.75806 12.75ZM9.75806 15L9.75806 15.008L9.75 15.008L9.75 15L9.75806 15ZM7.50806 12.75L7.50806 12.758L7.5 12.758L7.5 12.75L7.50806 12.75ZM7.50806 15L7.50806 15.008L7.5 15.008L7.5 15L7.50806 15ZM5.25806 12.75L5.25806 12.758L5.25 12.758L5.25 12.75L5.25806 12.75ZM5.25806 15L5.25806 15.008L5.25 15.008L5.25 15L5.25806 15ZM12.0081 10.5L12.0081 10.508L12 10.508L12 10.5L12.0081 10.5ZM12.0081 12.75L12.0081 12.758L12 12.758L12 12.75L12.0081 12.75ZM12.0081 15L12.0081 15.008L12 15.008L12 15L12.0081 15ZM14.2581 10.5L14.2581 10.508L14.25 10.508L14.25 10.5L14.2581 10.5ZM14.2581 12.75L14.2581 12.758L14.25 12.758L14.25 12.75L14.2581 12.75Z" stroke="#585858" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
                                </svg>
                                <p class="font-medium text-base text-[#575757]">${detail.published_in}</p>                             
                            </div>
                        </div>
                        <div>
                                <img class=" h-[50px] p-4 rounded-full bg-[#fef7f7]" src="images/right-arrow.png" alt="">
                        </div>
                    </div>
                </div>
            </div>`;
            divContainer.appendChild(div);
    })
}


loadData();



