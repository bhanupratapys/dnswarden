# Notice

## Project is live for public usage. [Custom filter](https://dnswarden.com/customfilter.html) DNS is live, try it out [here](https://dnswarden.com/customfilter.html).




#### Just a normal privacy oriented DNS service with the ability to block ads, trackers, malware, and phishing. We provide an uncensored DNS aswell! 



## Features

* Provides multiple types of DNS 
  * **Pure uncensored DNS** (Blocks nothings , more power for the user!)
  * **Adblocking DNS** (Blocks ads , trackers and all the random crap on the internet.)
  * **Adult Filter DNS** (Blocks adult content, enforces force safe search for search engines and YouTube. Also blocks ads, trackers and other malicious stuff)
  * **Custom filter DNS** (Users can choose multiple blocklists from the predefined set depending on their usage. Only supports DNS-over-TLS and DNS-over-HTTPS)
  

    * Supports DNSCrypt , DNS over HTTPS and DNS over TLS .
    * DNSSEC and [QNAME minimization](https://tools.ietf.org/html/rfc7816) are enabled by default.
    * Supports other [non-icann TLD's](https://github.com/bhanupratapys/dnswarden/issues/7#issuecomment-548266343).
    * No query logging .
    * If your favourite website gets blocked/broken, report **[ here](https://github.com/dnswarden/blocklist-staging)** or **[ here](https://t.me/dnswarden)** or **[ here](mailto:dns-support@dnswarden.com)**. No support will be given to custom filter DNS for broken/blocked sites. Users will have to choose the blocklist appropriately. 
    
    
 # Server information
 
* ## Adblocking DNS (DoT, DoH, DnsCryptV2)
  
  
  * ### DNS-over-TLS
     *  adblock.dns.dnswarden.com
  
  * ### DNS-over-HTTPS: 
    *  https://dns.dnswarden.com/adblock
    *  [Stamps](https://github.com/bhanupratapys/dnswarden/tree/master/stamps/doh#adblock).

    
  

       
* ## Uncensored DNS (DoT, DoH, DnsCryptV2)
  
  
  * ### DNS-over-TLS
     *  uncensored.dns.dnswarden.com
  
  * ### DNS-over-HTTPS: 
    *  https://dns.dnswarden.com/uncensored
    *  [Stamps](https://github.com/bhanupratapys/dnswarden/tree/master/stamps/doh#uncensored--unfiltered).
 
    
    
  * ### DnsCrypt

      * [Stamps](https://github.com/bhanupratapys/dnswarden/blob/master/stamps/dnscrypt/europe-switzerland.md#dnswarden-uncensor-dc-swiss) for server at Switzerland.
      
      * [Stamps](https://github.com/bhanupratapys/dnswarden/blob/master/stamps/dnscrypt/experimental_anycast.md#dnswarden-uncensor-dc) for anycast server.
      
      * [Stamps](https://github.com/bhanupratapys/dnswarden/blob/master/stamps/dnscrypt/relay.md#anon-dnswarden-swiss) for realy at Switzerland.
      

          

       
       
* ## Adult Filter DNS (DoT, DoH, DnsCryptV2)
  
  
  * ### DNS-over-TLS
     *  adultfilter.dns.dnswarden.com
  
  * ### DNS-over-HTTPS: 
    *  https://dns.dnswarden.com/adultfilter
    *  [Stamps](https://github.com/bhanupratapys/dnswarden/tree/master/stamps/doh#adult-filter).

    
    
       
* ## Privacy policy and T&C
  * Use at your own risk. I will not be held responsible for any downtime of the servers, only on a "best effort" basis.
  * No query logging. Completely disabled query logs related to the DNS traffic.
  * DNS traffic will be forwarded to the datacenter's DNS servers if the resolver fails. 





* ### Client software

    * Android
      * [Dnscrypt-proxy](https://github.com/DNSCrypt/dnscrypt-proxy), Supports DnsCrypt and DoH. Also supports other OS's.
      * [InviZible Pro](https://f-droid.org/en/packages/pan.alexander.tordnscrypt.stable), Supports DnsCrypt, DoH and many more goodies under the hood.
      * [Nebulo](https://git.frostnerd.com/PublicAndroidApps/smokescreen#installation), Supports both DoT and DoH.
      * [PersonalDnsFilter](https://zenz-solutions.de/personaldnsfilter), Supports DoT, DoH and normal DNS.
      * [Intra](https://play.google.com/store/apps/details?id=app.intra), Supports only DoH.
      * [Rethink-app](https://github.com/celzero/rethink-app), Supports DnsCrypt, DoH and many more goodies under the hood.
      * By using Android Pie , Go to Setting -> Wi-Fi -> Private DNS and enter the hostname. Supports only DoT.
      
     
    * For other OS's
       * [Knot-resolver](https://www.knot-resolver.cz).
       * [Unbound](https://nlnetlabs.nl/projects/unbound/about).
       * [Stubby](https://dnsprivacy.org/wiki/display/DP/DNS+Privacy+Daemon+-+Stubby).
       * [m13253's DoH](https://github.com/m13253/dns-over-https).




