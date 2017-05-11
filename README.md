# hex-spoof

A simple script to randomize and display an infinite stream of "hexdump" output.

### but why?

After watching [27](https://www.youtube.com/watch?v=dLRLYPiaAoA), a YouTube short by [exurb1a](https://www.youtube.com/channel/UCimiUgDLbi6P17BdaCZpVbg), an excellent content creator, I decided to write a similar scrolling wall of gibberish, with the only real goal of sequencing output such that it presented a believable rate consistent with a processor under varying load.

It's more interesting to observe than it ought to be, but that isn't saying much.


```
0000e340  07 a7 de 79 b8 6c 8f 6f  e1 8f 0c 07 9d b1 bd dd  |...y.l.o........|
0000e350  0a d4 72 42 9a b4 0c 94  ac df 31 1a ef 61 19 04  |..rB......1..a..|
0000e360  33 74 42 fc 3c 11 b8 c7  f2 42 d0 1c d2 87 6d 52  |3tB.<....B....mR|
0000e370  b6 fd f8 a3 ad 9e 98 4c  7c 9f b9 84 2d 16 fd 3b  |.......L|...-..;|
0000e380  87 4d 24 21 11 fa d4 10  f4 13 09 3a f5 ba b3 0a  |.M$!.......:....|
0000e390  49 d3 0d 4e e8 75 66 ca  ef 35 b1 d1 b9 06 22 a8  |I..N.uf..5....".|
0000e3a0  8c 2a b0 30 5e 06 1e be  4e 1a 0a 4c 12 f5 61 94  |.*.0^...N..L..a.|
0000e3b0  12 5f 58 5c 41 43 a7 4f  82 2f 8e b0 fc b4 63 bb  |._X\AC.O./....c.|
0000e3c0  ee 6d d7 b5 45 22 59 8e  fe ce 10 5d 0f a1 24 f9  |.m..E"Y....]..$.|
0000e3d0  ed 87 96 9a 1e 33 1c 14  e4 a3 8f d4 07 f9 91 0d  |.....3..........|
0000e3e0  41 24 0e 0e b0 5f 48 a1  19 02 87 cc e7 0b c2 e9  |A$..._H.........|
0000e3f0  34 6d 4a c0 6e 92 20 83  9f ae 5a 77 92 21 6c 44  |4mJ.n. ...Zw.!lD|
0000e400  f0 84 9e 24 c1 e8 ec 2c  9a ce f9 b9 cc 10 61 34  |...$...,......a4|
0000e410  c0 c5 a0 2b 1f 81 cf e1  e5 64 19 6b 0f 34 0f da  |...+.....d.k.4..|
0000e420  c4 a3 84 3b 4f 96 82 37  71 b7 21 93 ce 6a 91 3a  |...;O..7q.!..j.:|
0000e430  89 b3 cb 8b 3f 92 98 9c  d4 30 56 71 2a 7a 5c ed  |....?....0Vq*z\.|
0000e440  97 7a 41 75 31 5c a7 71  6e c9 e4 80 9e c4 ce cd  |.zAu1\.qn.......|
0000e450  2c 43 86 c8 1b 45 1d cc  2f 52 69 68 20 ee 8d 42  |,C...E../Rih ..B|
0000e460  20 8f 38 68 10 f3 94 ec  e4 1f 7e 7a 12 c5 7f 51  | .8h......~z...Q|
0000e470  9f 61 f6 67 17 15 7c dc  43 c0 1c ab c3 d9 a1 c2  |.a.g..|.C.......|
0000e480  35 a7 bc 18 2d 2c 1e 51  56 8e 65 c5 ce 44 91 4d  |5...-,.QV.e..D.M|
0000e490  80 ae 6f 64 22 43 50 5f  61 2c 01 88 f3 0b 81 0f  |..od"CP_a,......|
0000e4a0  32 f3 c9 fa 83 66 b6 33  5a 74 d7 4f 5d 9b 18 6e  |2....f.3Zt.O]..n|
0000e4b0  4a d3 18 84 20 5d 50 b3  b6 48 ef f2 26 7b 42 13  |J... ]P..H..&{B.|
0000e4c0  a3 ec e1 5b e8 54 93 58  cd 2a 1d 4f e1 b4 71 48  |...[.T.X.*.O..qH|
0000e4d0  b7 b4 de 81 42 71 18 99  1c 37 01 e0 8b 95 05 1b  |....Bq...7......|
0000e4e0  eb a6 e1 45 02 5c c5 e2  9d ae 6a 29 4c 04 02 ba  |...E.\....j)L...|
0000e4f0  22 5f a6 20 49 dc ea 1d  04 f8 3d e4 ae 4a f6 ac  |"_. I.....=..J..|
0000e500  ff 47 0b c1 7d c9 7b 1c  78 ef 70 ad 9f fa 29 0b  |.G..}.{.x.p...).|
0000e510  56 42 86 ba a6 d6 3c 8c  a0 57 08 bc 8b 79 2b 17  |VB....<..W...y+.|
0000e520  fd 74 b2 d2 66 93 5b e1  c9 52 6e 2a 8f 8e 66 31  |.t..f.[..Rn*..f1|
0000e530  31 65 ad 39 ef a6 64 3d  aa fa 7e c9 4f 3e 40 25  |1e.9..d=..~.O>@%|
0000e540  cc 5f 30 af 75 38 38 42  3c 8a 03 c9 03 15 95 7e  |._0.u88B<......~|
0000e550  40 2a 42 0e fe ee 7a 9c  5f 83 6c ea b7 e8 99 7d  |@*B...z._.l....}|
0000e560  ca 63 5e 7c 32 1d 93 b6  ee b7 bd 53 e4 b3 7e e3  |.c^|2......S..~.|
0000e570  60 4d b0 f2 7a b4 9f 10  b5 79 ce 89 c1 de e5 2f  |`M..z....y...../|
0000e580  a8 d6 3f ca a3 0b b5 3e  0e 87 b2 d3 5b 68 5c 6d  |..?....>....[h\m|
0000e590  cf fa be e9 97 59 da c8  15 bd ac e2 1c 5b 83 21  |.....Y.......[.!|
0000e5a0  89 12 75 f2 93 87 a7 a7  c6 c5 d1 0e 58 65 36 5a  |..u.........Xe6Z|
0000e5b0  cd bb b3 14 70 28 88 ca  f7 45 7a d6 f3 54 55 c0  |....p(...Ez..TU.|

```
