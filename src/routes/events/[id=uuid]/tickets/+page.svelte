<script lang="ts">
    import type { PageData } from './$types';
    
    export let data: PageData;
  </script>

<div>
    
      address
      <p>{data.Event?.id}</p>
      {data.Event?.address}
      {data.Event?.addressDetail}
      {data.Event?.zipCode}
      {data.Event?.createdAt}
      {data.Event?.updatedAt}@@   
      {data.Event?.endsAt}
      {data.Event?.startsAt}
      {data.Event?.description}
      {data.Event?.placeName}
      {data.Event?.title}
      
    
</div>

