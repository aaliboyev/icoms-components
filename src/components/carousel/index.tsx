import * as React from "react"
import useEmblaCarousel, {
    type UseEmblaCarouselType,
} from "embla-carousel-react"
import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons"
import Button from "../button"
import {styled} from "@stitches/react";
import {SrOnlySpan} from "../../utils/styles";

type CarouselApi = UseEmblaCarouselType[1]
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>
type CarouselOptions = UseCarouselParameters[0]
type CarouselPlugin = UseCarouselParameters[1]

type CarouselProps = {
    opts?: CarouselOptions
    plugins?: CarouselPlugin
    orientation?: "horizontal" | "vertical"
    setApi?: (api: CarouselApi) => void
    styles?: {
        root: Record<string, any>
    }
}

type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0]
    api: ReturnType<typeof useEmblaCarousel>[1]
    scrollPrev: () => void
    scrollNext: () => void
    canScrollPrev: boolean
    canScrollNext: boolean
} & CarouselProps

const CarouselContext = React.createContext<CarouselContextProps | null>(null)
const StyledDiv = styled('div', {});

function useCarousel() {
    const context = React.useContext(CarouselContext)

    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />")
    }

    return context
}

// Carousel

const Carousel = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & CarouselProps>(
    ({orientation = "horizontal", opts, setApi,          plugins,
            children,
            ...props
        },
        ref
    ) => {
        const [carouselRef, api] = useEmblaCarousel(
            {
                ...opts,
                axis: orientation === "horizontal" ? "x" : "y",
            },
            plugins
        )
        const [canScrollPrev, setCanScrollPrev] = React.useState(false)
        const [canScrollNext, setCanScrollNext] = React.useState(false)

        const onSelect = React.useCallback((api: CarouselApi) => {
            if (!api) {
                return
            }

            setCanScrollPrev(api.canScrollPrev())
            setCanScrollNext(api.canScrollNext())
        }, [])

        const scrollPrev = React.useCallback(() => {
            api?.scrollPrev()
        }, [api])

        const scrollNext = React.useCallback(() => {
            api?.scrollNext()
        }, [api])

        const handleKeyDown = React.useCallback(
            (event: React.KeyboardEvent<HTMLDivElement>) => {
                if (event.key === "ArrowLeft") {
                    event.preventDefault()
                    scrollPrev()
                } else if (event.key === "ArrowRight") {
                    event.preventDefault()
                    scrollNext()
                }
            },
            [scrollPrev, scrollNext]
        )

        React.useEffect(() => {
            if (!api || !setApi) {
                return
            }

            setApi(api)
        }, [api, setApi])

        React.useEffect(() => {
            if (!api) {
                return
            }

            onSelect(api)
            api.on("reInit", onSelect)
            api.on("select", onSelect)

            return () => {
                api?.off("select", onSelect)
            }
        }, [api, onSelect])

        return (
            <CarouselContext.Provider
                value={{
                    carouselRef,
                    api: api,
                    opts,
                    orientation:
                        orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
                    scrollPrev,
                    scrollNext,
                    canScrollPrev,
                    canScrollNext,
                }}
            >
                <StyledDiv
                    ref={ref}
                    onKeyDownCapture={handleKeyDown}
                    css={{position: "relative", ...props.styles?.root}}
                    role="region"
                    aria-roledescription="carousel"
                    {...props}
                >
                    {children}
                </StyledDiv>
            </CarouselContext.Provider>
        )
    }
)
Carousel.displayName = "Carousel"

// Carousel Content
export type CarouselContentProps = React.HTMLAttributes<HTMLDivElement> & {
    styles?: {
        root: Record<string, any>
    }
}
const CarouselContent = React.forwardRef<HTMLDivElement, CarouselContentProps>(
    ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel()
    let baseStyles = orientation === "horizontal"
        ? {display: "flex", marginLeft: "-1rem"}
        : {display: "flex", marginTop: "-1rem", flexDirection: "column"}
    return (
        <div ref={carouselRef} style={{overflow: "hidden"}}>
            <StyledDiv
                ref={ref}
                css={{...baseStyles, ...props.styles?.root}}
                {...props}
            />
        </div>
    )
})
CarouselContent.displayName = "CarouselContent"

// Carousel Item
type CarouselItemProps = React.HTMLAttributes<HTMLDivElement> & {
    styles?: {
        root: Record<string, any>
    }
}
const CarouselItem = React.forwardRef<HTMLDivElement, CarouselItemProps>(
    (props, ref) => {
    const { orientation } = useCarousel()
    let baseStyles = {
        minWidth: 0,
        flexShrink: 0,
        flexGrow: 0,
        flexBasis: "100%",
    }
    let h = {paddingLeft: "1rem"}
    let v = {paddingTop: "1rem"}
    if (orientation === "vertical") baseStyles = {...baseStyles, ...v}
    else baseStyles = {...baseStyles, ...h}
    return (
        <StyledDiv
            ref={ref}
            role="group"
            aria-roledescription="slide"
            css={{...baseStyles, ...props.styles?.root}}
            {...props}
        />
    )
})
CarouselItem.displayName = "CarouselItem"

// Carousel Previous
const CarouselPrevious = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button>
>((props, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel()
    let baseStyles = {
        position: "absolute",
        borderRadius: "50%",
        width: "2rem",
        height: "2rem",
        left: "-3rem",
        top: "50%",
        transform: "translateY(-50%)",
    }
    let v = {
        top: "-3rem",
        left: "50%",
        transform: "translateX(-50%) rotate(90deg)",
    }
    if (orientation === "vertical") baseStyles = {...baseStyles, ...v}
    let style = {...baseStyles, ...props.styles?.root}
    return (
        <Button
            ref={ref}
            styles={{root: style}}
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            {...props}
        >
            <ArrowLeftIcon style={{
                width: "1.5rem",
                height: "1.5rem",
            }} />
            <SrOnlySpan />
        </Button>
    )
})

CarouselPrevious.displayName = "CarouselPrevious"

// Carousel Next
const CarouselNext = React.forwardRef<
    HTMLButtonElement,
    React.ComponentProps<typeof Button>
>((props, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel()
    let baseStyles = {
        position: "absolute",
        borderRadius: "50%",
        width: "2rem",
        height: "2rem",
        right: "-3rem",
        top: "50%",
        transform: "translateY(-50%)",
    }
    let v = {
        bottom: "-3rem",
        left: "50%",
        transform: "translateX(-50%) rotate(90deg)",
    }
    if (orientation === "vertical") baseStyles = {...baseStyles, ...v}
    let style = {...baseStyles, ...props.styles?.root}

    return (
        <Button
            ref={ref}
            styles={{root: style}}
            disabled={!canScrollNext}
            onClick={scrollNext}
            {...props}
        >
            <ArrowRightIcon style={{
                width: "1.5rem",
                height: "1.5rem",
            }} />
            <SrOnlySpan />
        </Button>
    )
})

CarouselNext.displayName = "CarouselNext"

export {
    type CarouselApi,
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
}
