<template>
	<v-container>
		<v-layout row wrap >
			<v-flex order-sm2 xs12 sm6 class="mb-2 pr-1 pr-1">
			<h1 class="text-xs-center">My Meetups</h1>				
				<v-card 
				tile
				class="info mb-2"
				v-for="meetup in meetups" 		
				v-if="userId == meetup.creatorId"
				:key="meetup.id">
					<v-container fluid>
						<v-layout row>
							<v-flex xs5 sm4 md3>
								<v-card-media
									:src="meetup.imageUrl"
									height="130px"
									></v-card-media>
							</v-flex>
							<v-flex xs7 sm8 md9>
								<v-card-title primary-title>
									<div>
										<h3 class="white--text mb-0">{{ meetup.title }}</h3>
										<div>{{ meetup.date |date }}</div>
									</div>
								</v-card-title>
								<v-card-actions>
									<v-btn flat :to="'/meetups/' + meetup.id" >
										<v-icon left light>arrow_forward</v-icon>
										View Meetup
									</v-btn>
								</v-card-actions>
							</v-flex>
						</v-layout>
					</v-container>
				</v-card>
			</v-flex>

			<v-flex order-sm3 xs12 sm6 class="mb-2 pl-1 pr-1">
				<h1 class="text-xs-center">Registered Meetups</h1>
				<v-card
				tile
				class="info mb-2"				
				v-for="meetup in meetups" 
				v-if="RegisterMeetup.indexOf(meetup.id) >= 0"
				:key="meetup.id"
				:meetupId.prop="meetup.id">
					<v-container fluid>
						<v-layout row>
							<v-flex xs5 sm4 md3>
								<v-card-media
									:src="meetup.imageUrl"
									height="130px"
									></v-card-media>
							</v-flex>
							<v-flex xs7 sm8 md9>
								<v-card-title primary-title>
									<div>
										<h3 class="white--text mb-0">{{ meetup.title }}</h3>
										<div>{{ meetup.date |date }}</div>
									</div>
								</v-card-title>
								<v-card-actions>
									<v-btn flat :to="'/meetups/' + meetup.id" >
										<v-icon left light>arrow_forward</v-icon>
										View Meetup
									</v-btn>
								</v-card-actions>
							</v-flex>
						</v-layout>						
					</v-container>
				</v-card>
			</v-flex>
		</v-layout>
	</v-container>
</template>

<script>
	export default {
		computed: {
			meetups () {
				return this.$store.getters.loadedMeetups
			},
			userIsAuthenticated () {
				return this.$store.getters.user !== null && this.$store.getters.user !== undefined
			},
			userId () {
				if (!this.userIsAuthenticated) {
					return false
				}
				return this.$store.getters.user.id
			},
			RegisterMeetup () {
				var registeredMeetups = this.$store.getters.user.registeredMeetups
				return registeredMeetups.toString().replace(/[""]/g,"")
			}
		}
	}
</script>