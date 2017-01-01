---
title: 'Convert Custom Date with PHP'
subhead: 'Using DateTime::createFromFormat'
image: '/img/blog.png'
---

If you're like me, you've probably used an API before that doesn't return standardized date formats. In my specific case the date returned was in the format `ddmmyy`, which can't be parsed natively using DateTime in PHP.

The date could have been handled by something like moment.js on the client side, but I was already using a for each loop for the rest of the data in PHP and was trying to keep the client side nice and lean.

Also, I needed to calculate the difference between the two dates and couldn't do while the data was a string.

In steps the DateTime function. It's really handy because you can set it up to parse literally anything that a human would interpret as a date. Even something like the string "today's date is 14 January in the year 2017" can be converted to a date that is a bit more machine friendly.

So, let's get to it. Here are the two dates we're going to parse then compare.

```php
$depart = "140117";
$arrive = "arriving on 21 January 2017";
```

Using the DateTime function, we're going to give it the extension 'createFromFormat' which allows us tell PHP about the custom date format. The function takes the following format.

```php
DateTime::createFromFormat(*current custom format*,*variable of string of the date*);
```

Current custom format is the PHP readable date format described here in their documentation. It doesn't work exactly as you might think, so I recommend checking it out. (scroll to 'parameters') For example, you would think 140117 would be `ddmmyy`, but that is not the case, it is `dmy`.

The function will end up looking like this.

```php
$dep_date = DateTime::createFromFormat('dmy', $depart);
```

Which will return a date object.

For the `$arrive variable`, we need to get a little tricky and escape the parts or the string that don't correspond to a date

```php
$arr_date = DateTime::createFromFormat('\a\r\r\i\v\i\n\g \o\n d F Y', $arrive);
```

Now that we have our dates in machine readable format, we can calculate the difference between the two.

```php
$date_diff = $dep_date->diff($arr_date);
```

The diff extension returns an object, the difference in days is stored in `d`, which you can access in this situation using `$date_diff->d`

Woo! We have what we need. That's great! We can also express those date variables as strings in the format of your choice, using well, DateTime's format.

```php
$dep_date = $dep_date->format('d-m-Y');
$arr_date = $arr_date->format('m/d/Y');
```

Here's a gist I put together earlier

<div id="gist34256132" class="gist"><div class="gist-file"><div class="gist-data"><div class="js-gist-file-update-container js-task-list-container file-box"><div id="file-datetime-php" class="file"><div itemprop="text" class="blob-wrapper data type-php"><table class="highlight tab-size js-file-line-container" data-tab-size="8"><tr><td id="file-datetime-php-L1" class="blob-num js-line-number" data-line-number="1"></td><td id="file-datetime-php-LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-pse">&lt;?php</span><span class="pl-s1"></span></td></tr><tr><td id="file-datetime-php-L2" class="blob-num js-line-number" data-line-number="2"></td><td id="file-datetime-php-LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-smi">$depart</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>140117<span class="pl-pds">&quot;</span></span>;</span></td></tr><tr><td id="file-datetime-php-L3" class="blob-num js-line-number" data-line-number="3"></td><td id="file-datetime-php-LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-smi">$arrive</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&quot;</span>arriving on 21 January 2017<span class="pl-pds">&quot;</span></span>;</span></td></tr><tr><td id="file-datetime-php-L4" class="blob-num js-line-number" data-line-number="4"></td><td id="file-datetime-php-LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"></span></td></tr><tr><td id="file-datetime-php-L5" class="blob-num js-line-number" data-line-number="5"></td><td id="file-datetime-php-LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-smi">$dep_date</span> <span class="pl-k">=</span> <span class="pl-c1">DateTime</span><span class="pl-k">::</span>createFromFormat(<span class="pl-s"><span class="pl-pds">&#39;</span>dmy<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">$depart</span>);</span></td></tr><tr><td id="file-datetime-php-L6" class="blob-num js-line-number" data-line-number="6"></td><td id="file-datetime-php-LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-smi">$arr_date</span> <span class="pl-k">=</span> <span class="pl-c1">DateTime</span><span class="pl-k">::</span>createFromFormat(<span class="pl-s"><span class="pl-pds">&#39;</span>\a\r\r\i\v\i\n\g \o\n d F Y<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">$arrive</span>);</span></td></tr><tr><td id="file-datetime-php-L7" class="blob-num js-line-number" data-line-number="7"></td><td id="file-datetime-php-LC7" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"></span></td></tr><tr><td id="file-datetime-php-L8" class="blob-num js-line-number" data-line-number="8"></td><td id="file-datetime-php-LC8" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-smi">$date_diff</span> <span class="pl-k">=</span> <span class="pl-smi">$dep_date</span><span class="pl-k">-&gt;</span>diff(<span class="pl-smi">$arr_date</span>);</span></td></tr><tr><td id="file-datetime-php-L9" class="blob-num js-line-number" data-line-number="9"></td><td id="file-datetime-php-LC9" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"></span></td></tr><tr><td id="file-datetime-php-L10" class="blob-num js-line-number" data-line-number="10"></td><td id="file-datetime-php-LC10" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-smi">$dep_date</span> <span class="pl-k">=</span> <span class="pl-smi">$dep_date</span><span class="pl-k">-&gt;</span>format(<span class="pl-s"><span class="pl-pds">&#39;</span>d-m-Y<span class="pl-pds">&#39;</span></span>);</span></td></tr><tr><td id="file-datetime-php-L11" class="blob-num js-line-number" data-line-number="11"></td><td id="file-datetime-php-LC11" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-smi">$arr_date</span> <span class="pl-k">=</span> <span class="pl-smi">$arr_date</span><span class="pl-k">-&gt;</span>format(<span class="pl-s"><span class="pl-pds">&#39;</span>m/d/Y<span class="pl-pds">&#39;</span></span>);</span></td></tr><tr><td id="file-datetime-php-L12" class="blob-num js-line-number" data-line-number="12"></td><td id="file-datetime-php-LC12" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"></span></td></tr><tr><td id="file-datetime-php-L13" class="blob-num js-line-number" data-line-number="13"></td><td id="file-datetime-php-LC13" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"><span class="pl-c1">echo</span> <span class="pl-s"><span class="pl-pds">&quot;</span>The difference between <span class="pl-pds">&quot;</span></span><span class="pl-k">.</span> <span class="pl-smi">$dep_date</span> <span class="pl-k">.</span><span class="pl-s"><span class="pl-pds">&quot;</span> and <span class="pl-pds">&quot;</span></span><span class="pl-k">.</span> <span class="pl-smi">$arr_date</span> <span class="pl-k">.</span><span class="pl-s"><span class="pl-pds">&quot;</span> is <span class="pl-pds">&quot;</span></span><span class="pl-k">.</span> <span class="pl-smi">$date_diff</span><span class="pl-k">-&gt;</span><span class="pl-smi">d</span> <span class="pl-k">.</span><span class="pl-s"><span class="pl-pds">&quot;</span> days.<span class="pl-pds">&quot;</span></span>;</span></td></tr><tr><td id="file-datetime-php-L14" class="blob-num js-line-number" data-line-number="14"></td><td id="file-datetime-php-LC14" class="blob-code blob-code-inner js-file-line"><span class="pl-s1"></span><span class="pl-pse"><span class="pl-s1">?</span>&gt;</span></td></tr></table></div></div></div></div><div class="gist-meta"><a href="https://gist.github.com/yjimk/9d767450c23a0d85dbcb77edc3cbda3d/raw/56140879d013b337ab956bb5055d0c302af0f048/datetime.php" style="float:right">view raw</a><a href="https://gist.github.com/yjimk/9d767450c23a0d85dbcb77edc3cbda3d#file-datetime-php">datetime.php</a> hosted with &#10084; by <a href="https://github.com">GitHub</a></div></div></div>

Result

`The difference between 14-01-2017 and 01/21/2017 is 7 days.`
