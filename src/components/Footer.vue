<template>
    <footer>
        <div class="main-wrapper">
            <div class="date-div">
               <p> © {{ currentYear }} HorrorVault. All rights reserved.</p>
            </div>
            <ul>
                <li><RouterLink to="/">Home</RouterLink></li>
                <li><RouterLink to="/about">Su di noi</RouterLink></li>
                <li><RouterLink to="/horror">Film horror</RouterLink></li>
                <li><RouterLink to="/films">Lista film</RouterLink></li>
                <li><RouterLink to="/contacts">Contattaci</RouterLink></li>
            </ul>
        </div>
    </footer>
</template>

<script setup>
    import { RouterLink } from 'vue-router';
    const currentYear = new Date().getFullYear();
</script>

<style>
    footer{
        background-color: #592C80;
        height: 100px;
        padding: 1rem 1.5rem;
        margin-top: 2rem;
        border-top: 1px solid #A266FF;
    }
    .main-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        gap:0.5rem;  
        width: 100%;
        margin: 0 auto;
    }
    .date-div{
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        
        & p{
            font-size: 15px;
            font-weight: bold;
            color: #D1B2FF;
        }
    }
    ul{
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
        gap: 0.5rem;
        font-size: 10px;
        width: 100%;
        padding: 0;
        margin: 0;
    }

    ul li a{
        
        color: white;
        text-decoration: none;
        font-size: px;
        font-weight: bold;
        transition: color 0.3s ease;
        padding: 1rem;

        &:hover{
            color: #FF4C4C;
        }
    }

    @media (min-width: 768px) {
        .main-wrapper{
            display: flex;
            flex-direction: row;
        }
        .date-div p{
            font-size:20px;
        }
}
</style>