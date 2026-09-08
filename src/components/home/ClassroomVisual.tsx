import { Monitor, Projector, Smartphone, Tv } from "lucide-react";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { classroomVisual } from "@/lib/site";

const deviceIcons = [Monitor, Tv, Projector, Smartphone];

export function ClassroomVisual() {
  return (
    <section id="classroom" className="scroll-mt-24 bg-[#efe8dc]/70 py-14">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <SectionLabel>{classroomVisual.kicker}</SectionLabel>
            <h2 className="font-display mt-3 max-w-2xl text-3xl tracking-tight sm:text-5xl">
              {classroomVisual.title}
            </h2>
          </div>
          <p className="text-base leading-relaxed text-foreground/65">{classroomVisual.body}</p>
        </div>

        <div className="li-class mt-10 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          {classroomVisual.steps.map((step, index) => (
            <input
              key={step.id}
              id={`li-class-${step.id}`}
              type="radio"
              name="li-class-step"
              className="sr-only"
              defaultChecked={index === 0}
            />
          ))}

          <article className="rounded-[1.8rem] bg-white p-6 shadow-sm ring-1 ring-foreground/8 sm:p-7">
            <SectionLabel>{classroomVisual.demoKicker}</SectionLabel>
            <h3 className="font-display mt-3 text-2xl tracking-tight sm:text-3xl">
              {classroomVisual.demoTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/65">
              {classroomVisual.demoBody}
            </p>
            <div className="relative mt-6 grid min-h-[18rem] place-items-center overflow-hidden rounded-3xl bg-[#101b1a]">
              <div className="relative mt-8 h-[10.5rem] w-[8.2rem] rounded-b-[3.2rem] border-[5px] border-t-0 border-[#d8f1ea]">
                <span className="absolute top-[-3.6rem] left-[2.15rem] h-[3.7rem] w-[3.25rem] border-x-[5px] border-[#d8f1ea]" />
                <span className="li-flask-liquid absolute right-[7px] bottom-[7px] left-[7px] h-[5.4rem] rounded-b-[2.6rem] bg-[linear-gradient(#7ed5c0,#42ad92)]" />
                <span className="li-bubble absolute bottom-9 left-7 size-3.5 rounded-full border-2 border-[#d4fff4]" />
                <span className="li-bubble absolute bottom-5 left-16 size-3.5 rounded-full border-2 border-[#d4fff4] [animation-delay:0.6s]" />
                <span className="li-bubble absolute bottom-14 left-12 size-3.5 rounded-full border-2 border-[#d4fff4] [animation-delay:1.1s]" />
              </div>
            </div>
          </article>

          <article className="rounded-[1.8rem] bg-white p-6 shadow-sm ring-1 ring-foreground/8 sm:p-7">
            <SectionLabel>{classroomVisual.whyKicker}</SectionLabel>
            <h3 className="font-display mt-3 text-2xl tracking-tight sm:text-3xl">
              {classroomVisual.whyTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/65">
              {classroomVisual.whyBody}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {classroomVisual.steps.map((step) => (
                <label
                  key={step.id}
                  htmlFor={`li-class-${step.id}`}
                  className="cursor-pointer rounded-full border border-foreground/15 bg-white px-3 py-2 text-xs font-semibold"
                >
                  {step.label}
                </label>
              ))}
            </div>
            <div className="mt-4 min-h-[5.5rem] rounded-2xl bg-[#f4f7f5] p-4 text-sm leading-relaxed text-foreground/70">
              {classroomVisual.steps.map((step) => (
                <p key={step.id} className={`li-class-copy li-class-copy-${step.id}`}>
                  {step.copy}
                </p>
              ))}
            </div>
            <div className="mt-5 grid grid-cols-2 gap-2">
              {classroomVisual.devices.map((device, index) => {
                const Icon = deviceIcons[index] ?? Monitor;
                return (
                  <div
                    key={device}
                    className="flex items-center gap-2 rounded-2xl bg-cream px-3 py-3 text-xs font-semibold"
                  >
                    <Icon className="size-4 text-foreground/60" />
                    {device}
                  </div>
                );
              })}
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
