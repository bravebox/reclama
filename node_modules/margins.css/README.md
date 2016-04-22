# MARGINS

  A mobile-first, eight-step margin scale based on powers of 2. 
  Set the desired margin on any combination of sides on any element for any breakpoint.
  Base class names are namespaced across three breakpoints:

*  -ns = not-small (covers everything larger than mobile)
*  -m  = medium
*  -l  = large

## Install
```
npm install margins.css --save-dev
```
or download the css on github and include in your project.

## File Size
Minified & Gzipped - 946B 
Minified -6.4K 
Uncompressed 9.0K 

## The Code
```
/*
   MARGINS

   Legend:

   1st character
   m = margin
    
   2nd character
   a = all
   h = horizontal
   v = vertical
   t = top
   r = right
   b = bottom
   l = left

   3rd+ characters
   n = none
   xs = extra small
   s = small
   m = medium
   l = large
   x = extra
   xl = extra large
   xxl = extra extra large

*/

.man  {  margin: 0; }
.maxs {  margin: .25rem; }
.mas  {  margin: .5rem; }
.mam  {  margin: 1rem; }
.mal  {  margin: 2rem; }
.max  {  margin: 4rem; }
.maxl {  margin: 8rem; }
.maxxl { margin: 16rem; }

.mln  {  margin-left: 0; }
.mlxs {  margin-left: .25rem; }
.mls  {  margin-left: .5rem; }
.mlm  {  margin-left: 1rem; }
.mll  {  margin-left: 2rem; }
.mlx  {  margin-left: 4rem; }
.mlxl {  margin-left: 8rem; }
.mlxxl { margin-left: 16rem; }

.mrn  {  margin-right: 0; }
.mrxs {  margin-right: .25rem; }
.mrs  {  margin-right: .5rem; }
.mrm  {  margin-right: 1rem; }
.mrl  {  margin-right: 2rem; }
.mrx  {  margin-right: 4rem; }
.mrxl {  margin-right: 8rem; }
.mrxxl { margin-right: 16rem; }

.mbn  {  margin-bottom: 0; }
.mbxs {  margin-bottom: .25rem; }
.mbs  {  margin-bottom: .5rem; }
.mbm  {  margin-bottom: 1rem; }
.mbl  {  margin-bottom: 2rem; }
.mbx  {  margin-bottom: 4rem; }
.mbxl {  margin-bottom: 8rem; }
.mbxxl { margin-bottom: 16rem; }

.mtn  {  margin-top: 0; }
.mtxs {  margin-top: .25rem; }
.mts  {  margin-top: .5rem; }
.mtm  {  margin-top: 1rem; }
.mtl  {  margin-top: 2rem; }
.mtx  {  margin-top: 4rem; }
.mtxl {  margin-top: 8rem; }
.mtxxl { margin-top: 16rem; }

.mvn   { margin-top: 0;      margin-bottom: 0rem; }
.mvxs  { margin-top: .25rem; margin-bottom: .25rem; }
.mvs   { margin-top: .5rem;  margin-bottom: .5rem; }
.mvm   { margin-top: 1rem;   margin-bottom: 1rem; }
.mvl   { margin-top: 2rem;   margin-bottom: 2rem; }
.mvx   { margin-top: 4rem;   margin-bottom: 4rem; }
.mvxl  { margin-top: 8rem;   margin-bottom: 8rem; }
.mvxl  { margin-top: 16rem;   margin-bottom: 16rem; }

.mhn   {  margin-left: 0;     margin-right: 0; }
.mhs   {  margin-left: .5rem; margin-right: .5rem; }
.mhm   {  margin-left: 1rem;  margin-right: 1rem; }
.mhl   {  margin-left: 2rem;  margin-right: 2rem; }
.mhx   {  margin-left: 4rem;  margin-right: 4rem; }
.mhxl  {  margin-left: 8rem;  margin-right: 8rem; }
.mhxxl  { margin-left: 16rem; margin-right: 16rem; }

@media screen and (min-width: 48em) {
  .man-ns  {  margin: 0; }
  .maxs-ns {  margin: .25rem; }
  .mas-ns  {  margin: .5rem; }
  .mam-ns  {  margin: 1rem; }
  .mal-ns  {  margin: 2rem; }
  .max-ns  {  margin: 4rem; }
  .maxl-ns {  margin: 8rem; }
  .maxxl-ns { margin: 16rem; }

  .mln-ns  {  margin-left: 0; }
  .mlxs-ns {  margin-left: .25rem; }
  .mls-ns  {  margin-left: .5rem; }
  .mlm-ns  {  margin-left: 1rem; }
  .mll-ns  {  margin-left: 2rem; }
  .mlx-ns  {  margin-left: 4rem; }
  .mlxl-ns {  margin-left: 8rem; }
  .mlxxl-ns { margin-left: 16rem; }

  .mrn-ns  {  margin-right: 0; }
  .mrxs-ns {  margin-right: .25rem; }
  .mrs-ns  {  margin-right: .5rem; }
  .mrm-ns  {  margin-right: 1rem; }
  .mrl-ns  {  margin-right: 2rem; }
  .mrx-ns  {  margin-right: 4rem; }
  .mrxl-ns {  margin-right: 8rem; }
  .mrxxl-ns { margin-right: 16rem; }

  .mbn-ns  {  margin-bottom: 0; }
  .mbxs-ns {  margin-bottom: .25rem; }
  .mbs-ns  {  margin-bottom: .5rem; }
  .mbm-ns  {  margin-bottom: 1rem; }
  .mbl-ns  {  margin-bottom: 2rem; }
  .mbx-ns  {  margin-bottom: 4rem; }
  .mbxl-ns {  margin-bottom: 8rem; }
  .mbxxl-ns { margin-bottom: 16rem; }

  .mtn-ns  {  margin-top: 0; }
  .mtxs-ns {  margin-top: .25rem; }
  .mts-ns  {  margin-top: .5rem; }
  .mtm-ns  {  margin-top: 1rem; }
  .mtl-ns  {  margin-top: 2rem; }
  .mtx-ns  {  margin-top: 4rem; }
  .mtxl-ns {  margin-top: 8rem; }
  .mtxxl-ns { margin-top: 16rem; }

  .mvn-ns   {  margin-top: 0;      margin-bottom: 0rem; }
  .mvxs-ns  {  margin-top: .25rem; margin-bottom: .25rem; }
  .mvs-ns   {  margin-top: .5rem;  margin-bottom: .5rem; }
  .mvm-ns   {  margin-top: 1rem;   margin-bottom: 1rem; }
  .mvl-ns   {  margin-top: 2rem;   margin-bottom: 2rem; }
  .mvx-ns   {  margin-top: 4rem;   margin-bottom: 4rem; }
  .mvxl-ns  {  margin-top: 8rem;   margin-bottom: 8rem; }
  .mvxxl-ns  { margin-top: 16rem;  margin-bottom: 16rem; }

   .mhn-ns   {  margin-left: 0;     margin-right: 0; }
   .mhs-ns   {  margin-left: .5rem; margin-right: .5rem; }
   .mhm-ns   {  margin-left: 1rem;  margin-right: 1rem; }
   .mhl-ns   {  margin-left: 2rem;  margin-right: 2rem; }
   .mhx-ns   {  margin-left: 4rem;  margin-right: 4rem; }
   .mhxl-ns  {  margin-left: 8rem;  margin-right: 8rem; }
   .mhxxl-ns  { margin-left: 16rem; margin-right: 16rem; }

}

@media screen and (min-width: 48em) and (max-width: 64em) {
  .man-m  {  margin: 0; }
  .maxs-m {  margin: .25rem; }
  .mas-m  {  margin: .5rem; }
  .mam-m  {  margin: 1rem; }
  .mal-m  {  margin: 2rem; }
  .max-m  {  margin: 4rem; }
  .maxl-m {  margin: 8rem; }
  .maxxl-m { margin: 16rem; }

  .mln-m  {  margin-left: 0; }
  .mlxs-m {  margin-left: .25rem; }
  .mls-m  {  margin-left: .5rem; }
  .mlm-m  {  margin-left: 1rem; }
  .mll-m  {  margin-left: 2rem; }
  .mlx-m  {  margin-left: 4rem; }
  .mlxl-m {  margin-left: 8rem; }
  .mlxxl-m { margin-left: 16rem; }

  .mrn-m  {  margin-right: 0; }
  .mrxs-m {  margin-right: .25rem; }
  .mrs-m  {  margin-right: .5rem; }
  .mrm-m  {  margin-right: 1rem; }
  .mrl-m  {  margin-right: 2rem; }
  .mrx-m  {  margin-right: 4rem; }
  .mrxl-m {  margin-right: 8rem; }
  .mrxxl-m { margin-right: 16rem; }

  .mbn-m  {  margin-bottom: 0; }
  .mbxs-m {  margin-bottom: .25rem; }
  .mbs-m  {  margin-bottom: .5rem; }
  .mbm-m  {  margin-bottom: 1rem; }
  .mbl-m  {  margin-bottom: 2rem; }
  .mbx-m  {  margin-bottom: 4rem; }
  .mbxl-m {  margin-bottom: 8rem; }
  .mbxxl-m { margin-bottom: 16rem; }

  .mtn-m  {  margin-top: 0; }
  .mtxs-m {  margin-top: .25rem; }
  .mts-m  {  margin-top: .5rem; }
  .mtm-m  {  margin-top: 1rem; }
  .mtl-m  {  margin-top: 2rem; }
  .mtx-m  {  margin-top: 4rem; }
  .mtxl-m {  margin-top: 8rem; }
  .mtxxl-m { margin-top: 16rem; }

  .mvn-m {   margin-top: 0;      margin-bottom: 0rem; }
  .mvxs-m {  margin-top: .25rem; margin-bottom: .25rem; }
  .mvs-m {   margin-top: .5rem;  margin-bottom: .5rem; }
  .mvm-m {   margin-top: 1rem;   margin-bottom: 1rem; }
  .mvl-m {   margin-top: 2rem;   margin-bottom: 2rem; }
  .mvx-m {   margin-top: 4rem;   margin-bottom: 4rem; }
  .mvxl-m {  margin-top: 8rem;   margin-bottom: 8rem; }
  .mvxxl-m { margin-top: 16rem;  margin-bottom: 16rem; }

  .mhn-m {  margin-left: 0;      margin-right: 0; }
  .mhxs-m { margin-left: .25rem; margin-right: .25rem; }
  .mhs-m {  margin-left: .5rem;  margin-right: .5rem; }
  .mhm-m {  margin-left: 1rem;   margin-right: 1rem; }
  .mhl-m {  margin-left: 2rem;   margin-right: 2rem; }
  .mhx-m {  margin-left: 4rem;   margin-right: 4rem; }
  .mhxl {   margin-left: 8rem;   margin-right: 8rem; }
  .mhxxl {  margin-left: 16rem;  margin-right: 16rem; }

}

@media screen and (min-width: 64em)  {
  .man-l  {  margin: 0; }
  .maxs-l {  margin: .25rem; }
  .mas-l  {  margin: .5rem; }
  .mam-l  {  margin: 1rem; }
  .mal-l  {  margin: 2rem; }
  .max-l  {  margin: 4rem; }
  .maxl-l {  margin: 8rem; }
  .maxxl-l { margin: 16rem; }

  .mln-l  {  margin-left: 0; }
  .mlxs-l {  margin-left: .25rem; }
  .mls-l  {  margin-left: .5rem; }
  .mlm-l  {  margin-left: 1rem; }
  .mll-l  {  margin-left: 2rem; }
  .mlx-l  {  margin-left: 4rem; }
  .mlxl-l {  margin-left: 8rem; }
  .mlxxl-l { margin-left: 16rem; }

  .mrn-l  {  margin-right: 0; }
  .mrxs-l {  margin-right: .25rem; }
  .mrs-l  {  margin-right: .5rem; }
  .mrm-l  {  margin-right: 1rem; }
  .mrl-l  {  margin-right: 2rem; }
  .mrx-l  {  margin-right: 4rem; }
  .mrxl-l {  margin-right: 8rem; }
  .mrxxl-l { margin-right: 16rem; }

  .mbn-l  {  margin-bottom: 0; }
  .mbxs-l {  margin-bottom: .25rem; }
  .mbs-l  {  margin-bottom: .5rem; }
  .mbm-l  {  margin-bottom: 1rem; }
  .mbl-l  {  margin-bottom: 2rem; }
  .mbx-l  {  margin-bottom: 4rem; }
  .mbxl-l {  margin-bottom: 8rem; }
  .mbxxl-l { margin-bottom: 16rem; }

  .mtn-l  {  margin-top: 0; }
  .mtxs-l {  margin-top: .25rem; }
  .mts-l  {  margin-top: .5rem; }
  .mtm-l  {  margin-top: 1rem; }
  .mtl-l  {  margin-top: 2rem; }
  .mtx-l  {  margin-top: 4rem; }
  .mtxl-l {  margin-top: 8rem; }
  .mtxxl-l { margin-top: 16rem; }

  .mvn-l {   margin-top: 0;      margin-bottom: 0rem; }
  .mvxs-l {  margin-top: .25rem; margin-bottom: .25rem; }
  .mvs-l {   margin-top: .5rem;  margin-bottom: .5rem; }
  .mvm-l {   margin-top: 1rem;   margin-bottom: 1rem; }
  .mvl-l {   margin-top: 2rem;   margin-bottom: 2rem; }
  .mvx-l {   margin-top: 4rem;   margin-bottom: 4rem; }
  .mvxl-l {  margin-top: 8rem;   margin-bottom: 8rem; }
  .mvxxl-l { margin-top: 16rem;  margin-bottom: 16rem; }

  .mhn-l {   margin-left: 0;      margin-right: 0; }
  .mhxs-l {  margin-left: .25rem; margin-right: .25rem; }
  .mhs-l {   margin-left: .5rem;  margin-right: .5rem; }
  .mhm-l {   margin-left: 1rem;   margin-right: 1rem; }
  .mhl-l {   margin-left: 2rem;   margin-right: 2rem; }
  .mhx-l {   margin-left: 4rem;   margin-right: 4rem; }
  .mhxl-l {  margin-left: 8rem;   margin-right: 8rem; }
  .mhxxl-l { margin-left: 16rem;  margin-right: 16rem; }
}

```
# License

The MIT License (MIT)

Copyright (c) 2014 @mrmrs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

