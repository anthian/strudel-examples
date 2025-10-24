/* @title    By Design [DJ_Dave Edit]
   @by       Spill Tab
*/

setCps(100/60/4)

const beatsss = [
  "{~}",
  "{x ~ ~ x ~ ~ x ~ ~ [~|x] x ~ ~ ~ ~ ~}%16",
]

const sidechain = [
  "{1}",
  "{0.5 1.5!2 0.5 1.5!2 0.5 1.5!2 0.5!2 1.5!5}",
]

const look = 1

samples('github:algorave-dave/samples')

vox_chop: s("spilltab").jux(rev)
  .loopAt(8).chop(32)
  .clip(1)
  .sometimes(x=> x.striate(2).clip(1))
  .postgain(1.5)

vox_whole: s("spilltab")
  .loopAt(8).chop(32)
  // .sometimes(x=> x.striate(2).clip(1))
  .postgain(1.5)
  .mask("0!3 1".slow(8))

notes: n(irand("23").slow(2)).struct("x*8").scale("a#2:minor:pentatonic")//.jux(rev)
  .sound("gm_pad_halo, square")
  .fast(2)
  .decay(0.1)
  .lpf(slider(4000, 300, 4000))
  .room(1)
  .gain(0.2)
  .postgain(pick(sidechain, look))

bassline1: note("f#2@3 c#2@5 g#2@3 <d#2 a#1>@5".slow(2))
  .sound("[gm_synth_bass_1, square, gm_fretless_bass]")
  .transpose("[0, -12, 12]")
  .decay(slider(0.25, 0.1, 0.25)) 
  .lpf(slider(10000, 300, 10000))
  // .lpf(mouseX.segment(4).range(300,10000))
  .room(0.25)
  //
  .struct("x*16")
  // .postgain(sidechain).gain(0.5)
  .postgain(pick(sidechain, look)).gain(0.5)

_bassline2: note("d#2 a#2 g#2 f#2".slow(4))
  .sound("[gm_synth_bass_1, square, gm_fretless_bass]")
  .transpose("[0]")
  .decay(slider(0.25, 0.1, 0.25)) 
  .lpf(slider(300, 300, 10000))
  .room(0.25)
  //
  .struct("x*16")
  // .postgain(sidechain).gain(0.5)
  .postgain(pick(sidechain, look)).gain(0.5)

samples('github:tidalcycles/dirt-samples')
drums: stack(
  s("[tech:5]*4").postgain(6).struct(pick(beatsss, look)),
  s("~ cp").bank("KorgDDM110").speed(1.2).room(0.25).fast(2).postgain(0.3).lpf(3000).almostNever(ply("[2|4]")),
  s("hh").struct("x*16 | [x!3 ~!2 x!10 ~]").gain(0.6).room(0.5).bank("RolandTR808").almostNever(ply("2")).speed(1.25).jux(rev),
  s("~ hh").bank("RolandTR808").room(0.2).speed(0.75).gain(1).fast(4).jux(rev).almostNever(ply("2")),
  s("psr:[2|5|6|7|8|9|10|11|12|16|24|25|28|29]").fast(16).almostNever(ply("0")).postgain(pick(sidechain, look)).gain(0.4)
)

.punchcard()
.theme("bluescreen")

// all(x => x.lpf(mouseX.segment(4).range(3000,200)))
// all(x => x.hpf(mouseX.segment(4).range(10,1000)))
// all(x => x.crush(mouseX.segment(4).range(12,1)))


// @version 1.1