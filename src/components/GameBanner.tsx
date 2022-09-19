interface GameBannerProps {
    bannerUrl: string
    title: string
    adsCount: number
}

export function GameBanner(props: GameBannerProps) {
    return (
        <a href='#' className='relative rounded-lg overflow-hidden'>
          <img src={props.bannerUrl} className=' sm:w-24 md:w-44 lg:w-64'></img>

          <div className='w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0'>
            <strong className='font-bold text-white block text-[10px] sm:text-xs md:text-[14px] lg:text-lg'>{props.title}</strong>
            <span className='text-zinc-300 text-[8px] sm:text-[10px] md:text-[12px] lg:text-[16px] block'>{props.adsCount} anúncio(s)</span>
          </div>
        </a>
    )
}