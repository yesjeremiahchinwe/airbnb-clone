import aFrames from "/menu-images/a-frames.jpg"
import amazingViews from "/menu-images/amazing-views.jpg"
import adapted from "/menu-images/adapted.jpg"
import amazingPools from "/menu-images/amazing-pools.jpg"
import arctic from "/menu-images/arctic.jpg"
import bans from "/menu-images/bans.jpg"
import beach from "/menu-images/beach.jpg"
import beachFront from "/menu-images/beachfront.jpg"
import bedBreakfast from "/menu-images/bed-breakfast.jpg"
import boats from "/menu-images/boats.jpg"
import cabins from "/menu-images/cabins.jpg"
import campers from "/menu-images/campers.jpg"
import camping from "/menu-images/camping.jpg"
import casas from "/menu-images/casas.jpg"
import castles from "/menu-images/castles.jpg"
import caves from "/menu-images/caves.jpg"
import chefsKitchen from "/menu-images/chefs-kitchen.jpg"
import containers from "/menu-images/containers.jpg"
import countrySide from "/menu-images/country-side.jpg"
import creativeSpaces from "/menu-images/creative-spaces.jpg"
import cycladicHomes from "/menu-images/cycladic-homes.jpg"
import dammusi from "/menu-images/dammusi.jpg"
import desert from "/menu-images/desert.jpg"
import design from "/menu-images/design.jpg"
import domes from "/menu-images/domes.jpg"
import earthHomes from "/menu-images/earth-homes.jpg"
import farms from "/menu-images/farms.jpg"
import golfing from "/menu-images/golfing.jpg"
import grandPianos from "/menu-images/grand-pianos.jpg"
import hanoks from "/menu-images/hanoks.jpg"
import historicalHomes from "/menu-images/historical-homes.jpg"
import houseBoats from "/menu-images/hiuse-boats.jpg"
import ionicCities from "/menu-images/ionic-cities.jpg"
import islands from "/menu-images/islands.jpg"
import lake from "/menu-images/lake.jpg"
import lakeFront from "/menu-images/lakefront.jpg"
import luxe from "/menu-images/luxe.jpg"
import mansions from "/menu-images/mansions.jpg"
import minsus from "/menu-images/minsus.jpg"
import nationalParks from "/menu-images/national-parks.jpg"
import newHosue from "/menu-images/new.jpg"
import offTheGrid from "/menu-images/off-the-grid.jpg"
import omg from "/menu-images/omg.jpg"
import play from "/menu-images/play.jpg"
import riads from "/menu-images/riads.jpg"
import rooms from "/menu-images/rooms.jpg"
import rykons from "/menu-images/rykons.jpg"
import shephardsHut from "/menu-images/shephards-hut.jpg"
import skiIn from "/menu-images/ski-in.jpg"
import skiing from "/menu-images/skiing.jpg"
import surfing from "/menu-images/surfing.jpg"
import tinyHomes from "/menu-images/tiny-homes.jpg"
import topOfTheWorld from "/menu-images/top-of-the-world.jpg"
import towers from "/menu-images/towers.jpg"
import treeHouses from "/menu-images/tree-houses.jpg"
import trending from "/menu-images/trending.jpg"
import tropical from "/menu-images/tropical.jpg"
import trulli from "/menu-images/trulli.jpg"
import vanyards from "/menu-images/vanyards.jpg"
import windmills from "/menu-images/windmills.jpg"
import yurts from "/menu-images/yurts.jpg"

export interface MenuDataType {
    id: number
    src: string
    title: string
}

const menuData: MenuDataType[] = [
    {
        id: 1,
        src: amazingViews,
        title: "Amazing views"
    },
    {
        id: 2,
        src: trending,
        title: "Trending"
    },
    {
        id: 3,
        src: rooms,
        title: "Rooms"
    },
    {
        id: 4,
        src: windmills,
        title: "Windmills"
    },
    {
        id: 5,
        src: play,
        title: "Play"
    },
    {
        id: 6,
        src: lakeFront,
        title: "Lakefront"
    },
    {
        id: 7,
        src: caves,
        title: "Caves"
    },
    {
        id: 8,
        src: nationalParks,
        title: "National Parks"
    },
    {
        id: 9,
        src: castles,
        title: "Castles"
    },
    {
        id: 10,
        src: cabins,
        title: "Cabins"
    },
    {
        id: 11,
        src: campers,
        title: "Campers"
    },
    {
        id: 12,
        src: islands,
        title: "Islands"
    },
    {
        id: 13,
        src: beach,
        title: "Beach"
    },
    {
        id: 14,
        src: amazingPools,
        title: "Amazing Pools"
    },
    {
        id: 15,
        src: omg,
        title: "OMG"
    },
    {
        id: 16,
        src: arctic,
        title: "Arctic"
    },
    {
        id: 17,
        src: design,
        title: "Design"
    },
    {
        id: 18,
        src: surfing,
        title: "Surfing"
    },
    {
        id: 19,
        src: tropical,
        title: "Tropical"
    },
    {
        id: 20,
        src: bedBreakfast,
        title: "Bed & Breakfasts"
    },
    {
        id: 21,
        src: newHosue,
        title: "New"
    },
    {
        id: 22,
        src: ionicCities,
        title: "Iconic cities"
    },
    {
        id: 23,
        src: countrySide,
        title: "Countryside"
    },
    {
        id: 24,
        src: lake,
        title: "Lake"
    },
    {
        id: 25,
        src: mansions,
        title: "Mansions"
    },
    {
        id: 26,
        src: farms,
        title: "Farms"
    },
    {
        id: 27,
        src: tinyHomes,
        title: "Tiny Homes"
    },
    {
        id: 28,
        src: earthHomes,
        title: "Earth Homes"
    },
    {
        id: 29,
        src: camping,
        title: "Camping"
    },
    {
        id: 30,
        src: aFrames,
        title: "A-Frames"
    },
    {
        id: 31,
        src: luxe,
        title: "Luxe"
    },
    {
        id: 32,
        src: vanyards,
        title: "Vanyards"
    },
    {
        id: 33,
        src: historicalHomes,
        title: "Historical Homes"
    },
    {
        id: 34,
        src: topOfTheWorld,
        title: "Top Of The World"
    },
    {
        id: 35,
        src: golfing,
        title: "Golfings"
    },
    {
        id: 36,
        src: hanoks,
        title: "Hanoks"
    },
    {
        id: 37,
        src: skiing,
        title: "Skiings"
    },
    {
        id: 38,
        src: cycladicHomes,
        title: "Cycladic Homes"
    },
    {
        id: 39,
        src: chefsKitchen,
        title: "Chef's Kitchens"
    },
    {
        id: 40,
        src: beachFront,
        title: "Beachfront"
    },
    {
        id: 41,
        src: minsus,
        title: "Minsus"
    },
    {
        id: 42,
        src: treeHouses,
        title: "Treehouses"
    },
    {
        id: 43,
        src: rykons,
        title: "Ryokans"
    },
    {
        id: 44,
        src: yurts,
        title: "Yurts"
    },
    {
        id: 45,
        src: shephardsHut,
        title: "Shepherd's huts"
    },
    {
        id: 46,
        src: bans,
        title: "Barns"
    },
    {
        id: 47,
        src: casas,
        title: "Casas particulares"
    },
    {
        id: 48,
        src: desert,
        title: "Desert"
    },
    {
        id: 49,
        src: domes,
        title: "Domes"
    },
    {
        id: 50,
        src: towers,
        title: "Towers"
    },
    {
        id: 51,
        src: houseBoats,
        title: "Houseboats"
    },
    {
        id: 52,
        src: adapted,
        title: "Adapted"
    },
    {
        id: 53,
        src: offTheGrid,
        title: "Off-the-grid"
    },
    {
        id: 54,
        src: boats,
        title: "Boats"
    },
    {
        id: 55,
        src: skiIn,
        title: "Ski-in/out"
    },
    {
        id: 56,
        src: containers,
        title: "Containers"
    },
    {
        id: 57,
        src: creativeSpaces,
        title: "Creative spaces"
    },
    {
        id: 58,
        src: grandPianos,
        title: "Grand pianos"
    },
    {
        id: 59,
        src: dammusi,
        title: "Dammusi"
    },
    {
        id: 60,
        src: trulli,
        title: "Trulli"
    },
    {
        id: 61,
        src: riads,
        title: "Riads"
    }, 
]

export default menuData