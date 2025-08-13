// Switch angel
// https://www.youtube.com/watch?v=3h1vM0lIrpM&t=12s

setGainCurve(x => Math.pow(x, 2))
samples('github:switchangel/breaks')
samples('github:switchangel/pad')

setCps(170/60/4)

$: s("bd:4").beat("0,7?,10",16).gain(.7)
$: s("sd:2").beat("4,12",16).gain(.7)
$: s("white!8").decay(tri.range(.03, .1).fast(2)).gain(.6).almostNever(ply("2"))
$: s("rim:1").struct(rand.mul(0.6).round().seg(16).rib(3,2)).gain(.2)

$: s("breaks/2").fit().scrub("0").distort("2:.5").scope()

$: s("swpad").scrub("0@5 0@3".add("<.3@3 .2>")).gain(1.5)

// Effect to pulse increment modulation over time
_$: s("pulse!8").fm(time).fmh(time).room(1).gain(0.6)

// Effect to pulse increment modulation by sine function
$: s("pulse!8").fm(sine.mul(100)).fmh(sine.mul(100)).room(1).gain(0.6)

//Effect to add pulse with some randomness simulating computer sounds
_$: s("pulse!8").fm(sine.mul(irand(100,1000))).fmh(sine.mul(irand(100,1000))).room(1).gain(0.6)

//Effect to cut all the melody to the first half second
//all(x => x.rib(0,1/2))