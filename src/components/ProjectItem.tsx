import Badge from './Badge'
import {projectsData} from '../projectsData'

type ProjectItemProps = {
  id: string,
  badges: string[]
}

export default function ProjectItem({id, badges}: ProjectItemProps) {

  const currentProject = projectsData.find(project => project.id === id)

  return (
    <div className="bg-[#393939] overflow-hidden  shadow-lg shadow-[#000000] hover:scale-[1.01] transition-all ease-in-out duration-300">
            <h2 className="bg-[#1c1c1c] p-[0.5rem] text-white text-[1.2rem] font-bold">
              {currentProject?.name}
            </h2>
            <div className="p-[1rem] flex flex-col gap-4">
              <div>
                <img src={currentProject?.src} alt="" className="rounded-lg border-solid border-[2px] border-[#8e8d8d]" />
              </div>
              <div className="flex flex-col justify-between gap-[2rem]">
              <div className="grid grid-cols-[repeat(auto-fit,_minmax(100px,_100px))] grid-rows-2 gap-1">
                {badges.map((badge, index) => {
                  return <Badge key={index} text={badge} />
                })}
              </div>
              <a href={currentProject?.url} target="_blank" className={`self-center text-[0.8rem] sm:text-[1rem] font-bold rounded-[5px] py-1 text-white`}>VISIT SITE</a>
              </div>
            </div>
          </div>
  )
}
